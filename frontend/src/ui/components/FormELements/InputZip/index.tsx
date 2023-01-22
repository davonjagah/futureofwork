import React, { useState } from 'react';
import { useCallback } from 'react';
import { Divider } from 'ui/atoms/Divider';

import { Error, Input } from './index.styled';
import { isValidZip } from './utils';

export interface InputProps {
	categories: string[];
}

/**This component is a minimal setup for the zip code validation. This should be updated as needed  */
export const InputZip = (): JSX.Element => {
	const [value, setValue] = useState('');
	const [hasError, setHasError] = useState(false);

	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setHasError(!!value && !isValidZip(value));
		setValue(value);
	}, []);

	return (
		<>
			<Input
				type="text"
				id="search"
				placeholder="Search by zipcode"
				autoComplete="off"
				value={value}
				onChange={handleChange}
			/>
			<Divider transparent margin="4px 0 0" />
			{hasError && (
				<Error color="freeSpeechRed" size="sm">
					Please inter a valid zip
				</Error>
			)}
		</>
	);
};
