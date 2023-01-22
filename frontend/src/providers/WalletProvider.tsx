import { AnchorProvider } from '@project-serum/anchor';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import React, { useContext, useEffect, useState } from 'react';

const network = clusterApiUrl('devnet');
const opts: any = {
	preflightCommitment: 'processed'
};

export type WalletContextProps = {
	provider: any;
};

export const WalletQueryContext = React.createContext<WalletContextProps>({
	provider: null
});

export const WalletProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [provider, setProvider] = useState<any>();

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
		provider
	};

	return <WalletQueryContext.Provider value={value}>{children}</WalletQueryContext.Provider>;
};

export const useGetWalletProvider = (): WalletContextProps => useContext(WalletQueryContext);
