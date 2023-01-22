import { BN, Program, utils, web3 } from '@project-serum/anchor';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { NextPage } from 'next';
import { useGetWalletProvider } from 'providers/WalletProvider';
import React, { useState } from 'react';
import Layout from 'ui/widgets/Layout';

import idl from '../idl.json';

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl('devnet');
const opts: any = {
	preflightCommitment: 'processed'
};
const { SystemProgram } = web3;

const Sample: NextPage = (): JSX.Element => {
	const [campaigns, setCampaigns] = useState([]);
	const { provider, walletAddress, connectWallet } = useGetWalletProvider();

	const getCampaigns = async () => {
		const connection = new Connection(network, opts.preflightCommitment);
		const program = new Program(idl as any, programID, provider);
		Promise.all(
			(await connection.getProgramAccounts(programID)).map(async (campaign) => ({
				...(await program.account.campaign.fetch(campaign.pubkey)),
				pubkey: campaign.pubkey
			}))
		).then((campaigns) => setCampaigns(campaigns));
	};
	const createCampaign = async () => {
		try {
			const program = new Program(idl as any, programID, provider);
			const [campaign] = await PublicKey.findProgramAddress(
				[utils.bytes.utf8.encode('PROJECT_DEMO'), provider.wallet.publicKey.toBuffer()],
				program.programId
			);
			await program.rpc.create(
				'Future of work',
				'Changing the future of work on solana by helping small open source projects raise community funds on Chain',
				new BN(20),
				'https://example.project_url.com',
				'https://example.progress_update_url.com',
				'https://example.progress_image_url.com/img.jpg',
				'Oss Project',
				{
					accounts: {
						campaign,
						user: provider.wallet.publicKey,
						systemProgram: SystemProgram.programId
					}
				}
			);
			// console.log('Created a new campaign w/ address:', campaign.toString());
		} catch (error) {
			// console.error('Error creating campaign account:', error);
		}
	};

	const donate = async (publicKey) => {
		try {
			const program = new Program(idl as any, programID, provider);

			await program.rpc.donate(new BN(0.2 * web3.LAMPORTS_PER_SOL), {
				accounts: {
					campaign: publicKey,
					user: provider.wallet.publicKey,
					systemProgram: SystemProgram.programId
				}
			});
			// console.log('Donated some money to:', publicKey.toString());
			getCampaigns();
		} catch (error) {
			// console.error('Error donating:', error);
		}
	};

	const withdraw = async (publicKey) => {
		try {
			const program = new Program(idl as any, programID, provider);
			await program.rpc.withdraw(new BN(0.2 * web3.LAMPORTS_PER_SOL), {
				accounts: {
					campaign: publicKey,
					user: provider.wallet.publicKey
				}
			});
			// console.log('Withdrew some money from:', publicKey.toString());
		} catch (error) {
			// console.error('Error withdrawing:', error);
		}
	};

	const renderNotConnectedContainer = () => (
		<button onClick={connectWallet}>Connect to Wallet</button>
	);
	const renderConnectedContainer = () => (
		<>
			<button onClick={createCampaign}>Create a campaign…</button>
			<button onClick={getCampaigns}>Get a list of campaigns…</button>
			<br />
			{campaigns.map((campaign, i) => (
				<div key={i}>
					<p>Campaign ID: {campaign.pubkey.toString()}</p>
					<p>Balance: {(campaign.amountDonated / web3.LAMPORTS_PER_SOL).toString()}</p>
					<p>Amount withdrawn: {(campaign.amountWithdrawn / web3.LAMPORTS_PER_SOL).toString()}</p>
					<p>Target Amount: {campaign.targetAmount.toString()}</p>
					<p>{campaign.name}</p>
					<p>{campaign.description}</p>
					<p>{campaign.projectUrl}</p>

					<p>{campaign.projectImageUrl}</p>
					<p>{campaign.progressImageUrl}</p>
					{/* i been make mistake name the project image url as progress image url so abeg for test purpose abeg just use if statement pending when i go redeploy the program */}

					<p>{campaign.progressUpdateUrl}</p>
					<p>{campaign.category}</p>

					<button onClick={() => donate(campaign.pubkey)}>Click to donate!</button>
					<button onClick={() => withdraw(campaign.pubkey)}>Click to withdraw!</button>
					<br />
				</div>
			))}
		</>
	);
	return (
		<Layout>
			{!walletAddress && renderNotConnectedContainer()}
			{walletAddress && renderConnectedContainer()}
		</Layout>
	);
};

export default Sample;
