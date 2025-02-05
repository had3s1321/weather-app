'use client';

import { useState } from 'react';
import { Text } from '@/components/UI/globals/index';

const ModalToggler = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<Text size='12px' isClickable onClick={toggleModal}>
			Read more
		</Text>
	);
};

export default ModalToggler;
