import React from 'react';

import { Divider } from './index.styled';

export default {
	title: 'Atoms/Divider'
};

const Template = (args) => {
	return <Divider {...args} />;
};

export const Default = Template.bind({});

Default.args = {
	variant: 'dark',
	margin: '1rem',
	orientation: 'horizontal',
	height: '3px',
	width: '300px'
};
