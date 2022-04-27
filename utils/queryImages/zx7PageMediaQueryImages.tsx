import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import zx7_product_image_mobile from '../../public/assets/product-zx7-speaker/mobile/image-product.jpg';
import zx7_product_image_tablet from '../../public/assets/product-zx7-speaker/tablet/image-product.jpg';
import zx7_product_image_desktop from '../../public/assets/product-zx7-speaker/desktop/image-product.jpg';

import zx7_gallery_image_1_mobile from '../../public/assets/product-zx7-speaker/mobile/image-gallery-1.jpg';
import zx7_gallery_image_2_mobile from '../../public/assets/product-zx7-speaker/mobile/image-gallery-2.jpg';
import zx7_gallery_image_3_mobile from '../../public/assets/product-zx7-speaker/mobile/image-gallery-3.jpg';

import zx7_gallery_image_1_tablet from '../../public/assets/product-zx7-speaker/tablet/image-gallery-1.jpg';
import zx7_gallery_image_2_tablet from '../../public/assets/product-zx7-speaker/tablet/image-gallery-2.jpg';
import zx7_gallery_image_3_tablet from '../../public/assets/product-zx7-speaker/tablet/image-gallery-3.jpg';

import zx7_gallery_image_1_desktop from '../../public/assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import zx7_gallery_image_2_desktop from '../../public/assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import zx7_gallery_image_3_desktop from '../../public/assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

import zx9_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-zx9-speaker.jpg';
import xx99m2_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx59-headphones.jpg';

import zx9_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-zx9-speaker.jpg';
import xx99m2_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx59-headphones.jpg';

import zx9_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-zx9-speaker.jpg';
import xx99m2_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx59-headphones.jpg';

export let queriedImages: {
	zx7: StaticImageData;
	gallery: StaticImageData[];
	alsoLike: StaticImageData[];
};

export const zx7MediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			zx7: zx7_product_image_mobile,
			gallery: [
				zx7_gallery_image_1_mobile,
				zx7_gallery_image_2_mobile,
				zx7_gallery_image_3_mobile,
			],
			alsoLike: [
				zx9_alsoLike_image_mobile,
				xx99m2_alsoLike_image_mobile,
				xx59_alsoLike_image_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			zx7: zx7_product_image_tablet,
			gallery: [
				zx7_gallery_image_1_tablet,
				zx7_gallery_image_2_tablet,
				zx7_gallery_image_3_tablet,
			],
			alsoLike: [
				zx9_alsoLike_image_tablet,
				xx99m2_alsoLike_image_tablet,
				xx59_alsoLike_image_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			zx7: zx7_product_image_desktop,
			gallery: [
				zx7_gallery_image_1_desktop,
				zx7_gallery_image_2_desktop,
				zx7_gallery_image_3_desktop,
			],
			alsoLike: [
				zx9_alsoLike_image_desktop,
				xx99m2_alsoLike_image_desktop,
				xx59_alsoLike_image_desktop,
			],
		};
	}
};
