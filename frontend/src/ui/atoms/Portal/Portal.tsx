import React, { ReactText } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from './usePortal';

interface PortalProps {
	id: string;
	zIndex: ReactText;
	children: React.ReactNode;
}

function Portal({ id, zIndex, children }: PortalProps) {
	const target = usePortal(id, zIndex);
	return createPortal(children, target);
}

export const ClientOnlyPortal: React.FC<PortalProps> = ({ id, zIndex, children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? <Portal {...{ id, zIndex, children }} /> : null;
};
