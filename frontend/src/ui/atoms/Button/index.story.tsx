import React from 'react';

import { Button } from './index.styled';

export default {
	title: 'Atoms/Button',
	component: Button
};

const Template = (args) => {
	const { label, ...restArgs } = args;
	return (
		<Button {...restArgs}>
			{label}
			{restArgs.variant === 'link' && <i className="material-icons">keyboard_arrow_right</i>}
		</Button>
	);
};

export const Solid = Template.bind({});
Solid.args = {
	variant: 'solid',
	label: 'Learn More',
	width: '200px'
};

export const Outline = Template.bind({});
Outline.args = {
	variant: 'outline',
	label: 'Sign Up'
};

export const Link = Template.bind({});
Link.args = {
	variant: 'link',
	label: 'More About Jack'
};
