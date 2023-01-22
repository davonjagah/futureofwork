import React, { useState } from 'react';

import { Modal } from '.';

export default {
	title: 'Components/Modal',
	component: Modal
};

const Template = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(!showModal)}>Show modal</button>

			{showModal && (
				<Modal closeButton={true} onCloseIcon={() => setShowModal(false)}>
					<div
						style={{
							padding: '50px',
							height: '100vh',
							fontSize: '16px',
							textAlign: 'center',
							color: '#333',
							zIndex: 1000
						}}>
						Content on Modal
					</div>
				</Modal>
			)}
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
	layout: 'centered'
};
