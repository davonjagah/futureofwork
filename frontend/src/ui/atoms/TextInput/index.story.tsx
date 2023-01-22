import React from 'react';

import { TextInput } from './index';

export default {
	title: 'Atoms/TextInput'
};

const Template = () => {
	const [value, setValue] = React.useState('');
	return (
		<TextInput
			variant="primary"
			value={value}
			label="First Name"
			onChange={(event) => setValue(event.currentTarget.value)}
			type="password"
		/>
	);
};

export const Default = Template.bind({});

Default.args = {};
