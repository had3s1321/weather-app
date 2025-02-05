'use client';

import { useState } from 'react';
import { Text } from '@/components/UI/globals/index';

const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
	setIsModalOpen(!isModalOpen);
};

const ModalToggler = () => {
	return (
		<Text size='12px' isClickable onClick={toggleModal}>
			Read more
		</Text>
	);
};

export default ModalToggler;
