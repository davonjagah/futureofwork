import React from 'react';

import ImageModal from '.';

export default {
	title: 'Components/ImageModal',
	component: ImageModal
};

const Template = (args) => {
	return <ImageModal {...args} />;
};

export const Default = Template.bind({});

Default.parameters = {};
