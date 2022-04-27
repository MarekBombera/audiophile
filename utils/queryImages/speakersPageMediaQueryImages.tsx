import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import zx9_img_mobile from '../../public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import zx7_img_mobile from '../../public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';

import zx9_img_tablet from '../../public/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import zx7_img_tablet from '../../public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';

import zx9_img_desktop from '../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import zx7_img_desktop from '../../public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';

export let queriedImages: {
	speakers: StaticImageData[];
};

export const speakersPageMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			speakers: [zx9_img_mobile, zx7_img_mobile],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			speakers: [zx9_img_tablet, zx7_img_tablet],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			speakers: [zx9_img_desktop, zx7_img_desktop],
		};
	}
};
