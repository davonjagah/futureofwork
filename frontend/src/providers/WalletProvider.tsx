import { AnchorProvider } from '@project-serum/anchor';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import React, { useContext, useEffect, useState } from 'react';

const network = clusterApiUrl('devnet');
const opts: any = {
	preflightCommitment: 'processed'
};

export type WalletContextProps = {
	provider: any;
	connectWallet: () => void;
	setWalletAddress: (arg: string) => void;
	walletAddress: string;
};

export const WalletQueryContext = React.createContext<WalletContextProps>({
	provider: null,
	connectWallet: null,
	walletAddress: null,
	setWalletAddress: null
});

export const WalletProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [provider, setProvider] = useState<any>();
	const [walletAddress, setWalletAddress] = useState(null);
	const [isClient, setIsClient] = useState(false);

	const checkIfWalletIsConnected = async () => {
		try {
			const { solana } = window as any;
			if (solana) {
				if (solana.isPhantom) {
					const response = await solana.connect({
						onlyIfTrusted: true
					});
					// console.log('Connected with public key:', response.publicKey.toString());
					setWalletAddress(response.publicKey.toString());
				}
			} else {
				alert('Solana object not found! Get a Phantom wallet');
			}
		} catch (error) {
			// console.error(error);
		}
	};
	useEffect(() => {
		const onLoad = async () => {
			await checkIfWalletIsConnected();
			setIsClient(true);
		};
		onLoad();
	}, []);

	const connectWallet = async () => {
		const { solana } = window as any;
		// console.log(solana, 'weee');
		if (solana) {
			const response = await solana.connect();
			// console.log('Connected with public key:', response.publicKey.toString());
			setWalletAddress(response.publicKey.toString());
		}
	};

	useEffect(() => {
		if (window !== undefined) {
			const connection = new Connection(network, opts.preflightCommitment);
			const provider = new AnchorProvider(
				connection,
				(window as any).solana,
				opts.preflightCommitment
			);
			setProvider(provider);
		}
	}, []);
	const value: WalletContextProps = {
		provider,
		connectWallet,
		walletAddress,
		setWalletAddress
	};

	return (
		<WalletQueryContext.Provider value={value}>{isClient && children}</WalletQueryContext.Provider>
	);
};

export const useGetWalletProvider = (): WalletContextProps => useContext(WalletQueryContext);
