import React from 'react';

import Header from './Header';
import { LayoutWrapper } from './index.styled';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<LayoutWrapper>
			<Header />
			{children}
			<h2>Footer</h2>
		</LayoutWrapper>
	);
};

export default Layout;
