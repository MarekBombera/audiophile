import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import xx99mark2_img_mobile from '../../public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import xx99mark1_img_mobile from '../../public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';
import xx59_img_mobile from '../../public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';

import xx99mark2_img_tablet from '../../public/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx99mark1_img_tablet from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg';
import xx59_img_tablet from '../../public/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';

import xx99mark2_img_desktop from '../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import xx99mark1_img_desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import xx59_img_desktop from '../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

export let queriedImages: {
	headphones: StaticImageData[];
};

export const headphonesPageMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			headphones: [xx99mark2_img_mobile, xx99mark1_img_mobile, xx59_img_mobile],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			headphones: [xx99mark2_img_tablet, xx99mark1_img_tablet, xx59_img_tablet],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			headphones: [
				xx99mark2_img_desktop,
				xx99mark1_img_desktop,
				xx59_img_desktop,
			],
		};
	}
};
