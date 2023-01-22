import React, { useContext, useImperativeHandle, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { StarIcon } from 'ui/svgs';

import { InnerWrapper, Input, InputErrorMessage, InputWrapper, Label } from './index.styled';
import { InputProps } from './interface';
import { usePasswordEye } from './usePasswordEye';

export const TextInput = React.forwardRef((props: InputProps, ref) => {
	const {
		name = '',
		variant = 'primary',
		type = 'text',
		label,
		className = '',
		optional = true,
		optionalText = '',
		placeholder = '',
		isValid,
		errorText,
		hasFocus = false,
		onBlur,
		onChange,
		onKeyUp,
		autoComplete = 'off',
		disabled,
		id,
		tabIndex,
		isRequired,
		isReadOnly,
		width,
		height,
		textCenter
	} = props;

	const theme = useContext(ThemeContext);

	const { PasswordEye, isPasswordEyeOpen } = usePasswordEye();

	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		}
	}));

	const hasError = isValid === false;

	const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		onBlur?.(event);
	};

	return (
		<InputWrapper {...(width ? { width } : {})}>
			<div style={{ position: 'relative' }}>
				{label !== undefined && (
					<Label variant={variant} htmlFor={id} onClick={() => inputRef.current?.focus()}>
						{label}
						{isRequired && <StarIcon color={theme.colors.freeSpeechRed} />}
					</Label>
				)}
				<InnerWrapper>
					<Input
						className={className}
						type={type}
						name={name}
						placeholder={placeholder + (optional ? optionalText : '')}
						isValid={isValid}
						{...(hasFocus ? { autoFocus: true } : {})}
						{...(onChange ? { onChange } : {})}
						{...(autoComplete ? { autoComplete } : {})}
						{...(disabled ? { disabled } : {})}
						{...(id ? { id } : {})}
						{...(tabIndex ? { tabIndex } : {})}
						{...(isRequired ? { required: true } : {})}
						{...(isReadOnly ? { isReadOnly } : {})}
						{...(height ? { height } : {})}
						{...(textCenter ? { textCenter } : {})}
						onBlur={handleOnBlur}
						onKeyUp={onKeyUp}
						ref={inputRef}
						{...props}
						{...(type === 'password' ? { type: isPasswordEyeOpen ? 'text' : 'password' } : {})}
					/>
					{type === 'password' && <PasswordEye />}
				</InnerWrapper>
			</div>
			{hasError && <InputErrorMessage>{errorText}</InputErrorMessage>}
		</InputWrapper>
	);
});

TextInput.displayName = 'TextInput';
