import { StaticImageData } from 'next/image';
import xx99m2_img from '../../public/assets/cart/image-xx99-mark-two-headphones.jpg';
import xx99m1_img from '../../public/assets/cart/image-xx99-mark-one-headphones.jpg';
import xx59_img from '../../public/assets/cart/image-xx59-headphones.jpg';
import zx9_img from '../../public/assets/cart/image-zx9-speaker.jpg';
import zx7_img from '../../public/assets/cart/image-zx7-speaker.jpg';
import yx1_img from '../../public/assets/cart/image-yx1-earphones.jpg';

type Output = {
	id: number;
	itemName: string;
	price: number;
	img: StaticImageData;
	quantity: number;
};

export const xx99mk2 = (quantity: number): Output => {
	return {
		id: 1,
		itemName: 'xx99 mkii',
		price: 2999,
		img: xx99m2_img,
		quantity: quantity,
	};
};
export const xx99mk1 = (quantity: number): Output => {
	return {
		id: 2,
		itemName: 'xx99 mki',
		price: 1750,
		img: xx99m1_img,
		quantity: quantity,
	};
};

export const xx59 = (quantity: number): Output => {
	return {
		id: 3,
		itemName: 'xx59',
		price: 899,
		img: xx59_img,
		quantity: quantity,
	};
};

export const zx9 = (quantity: number): Output => {
	return {
		id: 4,
		itemName: 'zx9',
		price: 4500,
		img: zx9_img,
		quantity: quantity,
	};
};

export const zx7 = (quantity: number): Output => {
	return {
		id: 5,
		itemName: 'zx7',
		price: 3500,
		img: zx7_img,
		quantity: quantity,
	};
};

export const yx1 = (quantity: number): Output => {
	return {
		id: 6,
		itemName: 'yx1',
		price: 599,
		img: yx1_img,
		quantity: quantity,
	};
};
