import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import xx59_product_image_mobile from '../../public/assets/product-xx59-headphones/mobile/image-product.jpg';
import xx59_product_image_tablet from '../../public/assets/product-xx59-headphones/tablet/image-product.jpg';
import xx59_product_image_desktop from '../../public/assets/product-xx59-headphones/desktop/image-product.jpg';

import xx59_gallery_image_1_mobile from '../../public/assets/product-xx59-headphones/mobile/image-gallery-1.jpg';
import xx59_gallery_image_2_mobile from '../../public/assets/product-xx59-headphones/mobile/image-gallery-2.jpg';
import xx59_gallery_image_3_mobile from '../../public/assets/product-xx59-headphones/mobile/image-gallery-3.jpg';

import xx59_gallery_image_1_tablet from '../../public/assets/product-xx59-headphones/tablet/image-gallery-1.jpg';
import xx59_gallery_image_2_tablet from '../../public/assets/product-xx59-headphones/tablet/image-gallery-2.jpg';
import xx59_gallery_image_3_tablet from '../../public/assets/product-xx59-headphones/tablet/image-gallery-3.jpg';

import xx59_gallery_image_1_desktop from '../../public/assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import xx59_gallery_image_2_desktop from '../../public/assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import xx59_gallery_image_3_desktop from '../../public/assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

import xx99m2_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import xx99m1_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import zx9_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-zx9-speaker.jpg';

import xx99m2_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import xx99m1_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import zx9_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-zx9-speaker.jpg';

import xx99m2_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx99m1_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import zx9_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-zx9-speaker.jpg';

export let queriedImages: {
	xx59: StaticImageData;
	gallery: StaticImageData[];
	alsoLike: StaticImageData[];
};

export const xx59MediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			xx59: xx59_product_image_mobile,
			gallery: [
				xx59_gallery_image_1_mobile,
				xx59_gallery_image_2_mobile,
				xx59_gallery_image_3_mobile,
			],
			alsoLike: [
				xx99m2_alsoLike_image_mobile,
				xx99m1_alsoLike_image_mobile,
				zx9_alsoLike_image_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			xx59: xx59_product_image_tablet,
			gallery: [
				xx59_gallery_image_1_tablet,
				xx59_gallery_image_2_tablet,
				xx59_gallery_image_3_tablet,
			],
			alsoLike: [
				xx99m2_alsoLike_image_tablet,
				xx99m1_alsoLike_image_tablet,
				zx9_alsoLike_image_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			xx59: xx59_product_image_desktop,
			gallery: [
				xx59_gallery_image_1_desktop,
				xx59_gallery_image_2_desktop,
				xx59_gallery_image_3_desktop,
			],
			alsoLike: [
				xx99m2_alsoLike_image_desktop,
				xx99m1_alsoLike_image_desktop,
				zx9_alsoLike_image_desktop,
			],
		};
	}
};
