import React from 'react';

import Layout from '.';

export default {
	title: 'Widgets/Layout',
	component: Layout
};

const Template = (args) => {
	return <Layout {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
