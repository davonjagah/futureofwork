import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { LinkWrapper } from './index.styled';

const CustomLink = ({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}): JSX.Element => {
	const router = useRouter();

	const active = router.pathname === href ? true : false;

	return (
		<LinkWrapper active={active}>
			<Link href={href}>
				<a> {children}</a>
			</Link>
		</LinkWrapper>
	);
};

export default CustomLink;
