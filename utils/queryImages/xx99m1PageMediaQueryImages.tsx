import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import xx99m1_product_image_mobile from '../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import xx99m1_product_image_tablet from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg';
import xx99m1_product_image_desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';

import xx99m1_gallery_image_1_mobile from '../../public/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg';
import xx99m1_gallery_image_2_mobile from '../../public/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg';
import xx99m1_gallery_image_3_mobile from '../../public/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg';

import xx99m1_gallery_image_1_tablet from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg';
import xx99m1_gallery_image_2_tablet from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg';
import xx99m1_gallery_image_3_tablet from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg';

import xx99m1_gallery_image_1_desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import xx99m1_gallery_image_2_desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import xx99m1_gallery_image_3_desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

import xx99m2_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx59-headphones.jpg';
import zx9_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-zx9-speaker.jpg';

import xx99m2_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx59-headphones.jpg';
import zx9_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-zx9-speaker.jpg';

import xx99m2_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx59_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx59-headphones.jpg';
import zx9_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-zx9-speaker.jpg';

export let queriedImages: {
	xx99m1: StaticImageData;
	gallery: StaticImageData[];
	alsoLike: StaticImageData[];
};

export const xx99m1MediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			xx99m1: xx99m1_product_image_mobile,
			gallery: [
				xx99m1_gallery_image_1_mobile,
				xx99m1_gallery_image_2_mobile,
				xx99m1_gallery_image_3_mobile,
			],
			alsoLike: [
				xx99m2_alsoLike_image_mobile,
				xx59_alsoLike_image_mobile,
				zx9_alsoLike_image_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			xx99m1: xx99m1_product_image_tablet,
			gallery: [
				xx99m1_gallery_image_1_tablet,
				xx99m1_gallery_image_2_tablet,
				xx99m1_gallery_image_3_tablet,
			],

			alsoLike: [
				xx99m2_alsoLike_image_tablet,
				xx59_alsoLike_image_tablet,
				zx9_alsoLike_image_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			xx99m1: xx99m1_product_image_desktop,
			gallery: [
				xx99m1_gallery_image_1_desktop,
				xx99m1_gallery_image_2_desktop,
				xx99m1_gallery_image_3_desktop,
			],
			alsoLike: [
				xx99m2_alsoLike_image_desktop,
				xx59_alsoLike_image_desktop,
				zx9_alsoLike_image_desktop,
			],
		};
	}
};
