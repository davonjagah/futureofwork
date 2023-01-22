import React from 'react';

import { LayoutWrapper } from './index.styled';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<LayoutWrapper>
			<h1>Header</h1>
			{children}
			<h2>Footer</h2>
		</LayoutWrapper>
	);
};

export default Layout;
