import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import zx9_product_image_mobile from '../../public/assets/product-zx9-speaker/mobile/image-product.jpg';
import zx9_product_image_tablet from '../../public/assets/product-zx9-speaker/tablet/image-product.jpg';
import zx9_product_image_desktop from '../../public/assets/product-zx9-speaker/desktop/image-product.jpg';

import zx9_gallery_image_1_mobile from '../../public/assets/product-zx9-speaker/mobile/image-gallery-1.jpg';
import zx9_gallery_image_2_mobile from '../../public/assets/product-zx9-speaker/mobile/image-gallery-2.jpg';
import zx9_gallery_image_3_mobile from '../../public/assets/product-zx9-speaker/mobile/image-gallery-3.jpg';

import zx9_gallery_image_1_tablet from '../../public/assets/product-zx9-speaker/tablet/image-gallery-1.jpg';
import zx9_gallery_image_2_tablet from '../../public/assets/product-zx9-speaker/tablet/image-gallery-2.jpg';
import zx9_gallery_image_3_tablet from '../../public/assets/product-zx9-speaker/tablet/image-gallery-3.jpg';

import zx9_gallery_image_1_desktop from '../../public/assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import zx9_gallery_image_2_desktop from '../../public/assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import zx9_gallery_image_3_desktop from '../../public/assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

import zx7_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-zx7-speaker.jpg';
import xx99m1_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx59-headphones.jpg';

import zx7_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-zx7-speaker.jpg';
import xx99m1_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx59-headphones.jpg';

import zx7_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-zx7-speaker.jpg';
import xx99m1_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx59-headphones.jpg';

export let queriedImages: {
	zx9: StaticImageData;
	gallery: StaticImageData[];
	alsoLike: StaticImageData[];
};

export const zx9MediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			zx9: zx9_product_image_mobile,
			gallery: [
				zx9_gallery_image_1_mobile,
				zx9_gallery_image_2_mobile,
				zx9_gallery_image_3_mobile,
			],
			alsoLike: [
				zx7_alsoLike_image_mobile,
				xx99m1_alsoLike_image_mobile,
				xx59_alsoLike_image_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			zx9: zx9_product_image_tablet,
			gallery: [
				zx9_gallery_image_1_tablet,
				zx9_gallery_image_2_tablet,
				zx9_gallery_image_3_tablet,
			],
			alsoLike: [
				zx7_alsoLike_image_tablet,
				xx99m1_alsoLike_image_tablet,
				xx59_alsoLike_image_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			zx9: zx9_product_image_desktop,
			gallery: [
				zx9_gallery_image_1_desktop,
				zx9_gallery_image_2_desktop,
				zx9_gallery_image_3_desktop,
			],
			alsoLike: [
				zx7_alsoLike_image_desktop,
				xx99m1_alsoLike_image_desktop,
				xx59_alsoLike_image_desktop,
			],
		};
	}
};
