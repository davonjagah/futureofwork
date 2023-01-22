import { useState } from 'react';
import { EyeClosed } from 'ui/svgs/EyeClosed';
import { EyeOpen } from 'ui/svgs/EyeOpen';

import { PasswordButton } from './index.styled';

type UsePasswordEye = () => {
	PasswordEye: () => JSX.Element;
	isPasswordEyeOpen: boolean;
};

export const usePasswordEye: UsePasswordEye = () => {
	const [isEyeOpen, setIsEyeOpen] = useState(false);

	const IconButton = () => (
		<PasswordButton onClick={() => setIsEyeOpen((prev) => !prev)}>
			{isEyeOpen && <EyeOpen />}
			{!isEyeOpen && <EyeClosed />}
		</PasswordButton>
	);

	return { PasswordEye: IconButton, isPasswordEyeOpen: isEyeOpen };
};

/**
 * USAGE:
 * const { PasswordEye, isPasswordEyeOpen } = usePasswordEye();
 *
 * return (
 *  <InputWrapper>
 *    <input type={isPasswordEyeOpen ? 'text' : 'password'}>
 *    <PasswordEye />
 *  <InputWrapper>
 * )
 */
