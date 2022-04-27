import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import yx1_img_mobile from '../../public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import yx1_img_tablet from '../../public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg';
import yx1_img_desktop from '../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

export let queriedImages: {
	earphones: StaticImageData[];
};

export const earphonesPageMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			earphones: [yx1_img_mobile],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			earphones: [yx1_img_tablet],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			earphones: [yx1_img_desktop],
		};
	}
};
