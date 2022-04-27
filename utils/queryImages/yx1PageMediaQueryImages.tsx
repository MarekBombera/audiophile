import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import yx1_product_image_mobile from '../../public/assets/product-yx1-earphones/mobile/image-product.jpg';
import yx1_product_image_tablet from '../../public/assets/product-yx1-earphones/tablet/image-product.jpg';
import yx1_product_image_desktop from '../../public/assets/product-yx1-earphones/desktop/image-product.jpg';

import yx1_gallery_image_1_mobile from '../../public/assets/product-yx1-earphones/mobile/image-gallery-1.jpg';
import yx1_gallery_image_2_mobile from '../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg';
import yx1_gallery_image_3_mobile from '../../public/assets/product-yx1-earphones/mobile/image-gallery-3.jpg';

import yx1_gallery_image_1_tablet from '../../public/assets/product-yx1-earphones/tablet/image-gallery-1.jpg';
import yx1_gallery_image_2_tablet from '../../public/assets/product-yx1-earphones/tablet/image-gallery-2.jpg';
import yx1_gallery_image_3_tablet from '../../public/assets/product-yx1-earphones/tablet/image-gallery-3.jpg';

import yx1_gallery_image_1_desktop from '../../public/assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import yx1_gallery_image_2_desktop from '../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import yx1_gallery_image_3_desktop from '../../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

import xx99m1_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-xx59-headphones.jpg';
import zx9_alsoLike_image_mobile from '../../public/assets/shared/mobile/image-zx9-speaker.jpg';

import xx99m1_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-xx59-headphones.jpg';
import zx9_alsoLike_image_tablet from '../../public/assets/shared/tablet/image-zx9-speaker.jpg';

import xx99m1_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import xx59_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-xx59-headphones.jpg';
import zx9_alsoLike_image_desktop from '../../public/assets/shared/desktop/image-zx9-speaker.jpg';

export let queriedImages: {
	yx1: StaticImageData;
	gallery: StaticImageData[];
	alsoLike: StaticImageData[];
};

export const yx1MediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			yx1: yx1_product_image_mobile,
			gallery: [
				yx1_gallery_image_1_mobile,
				yx1_gallery_image_2_mobile,
				yx1_gallery_image_3_mobile,
			],
			alsoLike: [
				xx99m1_alsoLike_image_mobile,
				xx59_alsoLike_image_mobile,
				zx9_alsoLike_image_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			yx1: yx1_product_image_tablet,
			gallery: [
				yx1_gallery_image_1_tablet,
				yx1_gallery_image_2_tablet,
				yx1_gallery_image_3_tablet,
			],
			alsoLike: [
				xx99m1_alsoLike_image_tablet,
				xx59_alsoLike_image_tablet,
				zx9_alsoLike_image_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			yx1: yx1_product_image_desktop,
			gallery: [
				yx1_gallery_image_1_desktop,
				yx1_gallery_image_2_desktop,
				yx1_gallery_image_3_desktop,
			],
			alsoLike: [
				xx99m1_alsoLike_image_desktop,
				xx59_alsoLike_image_desktop,
				zx9_alsoLike_image_desktop,
			],
		};
	}
};
