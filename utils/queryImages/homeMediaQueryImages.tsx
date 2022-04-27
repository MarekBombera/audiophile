import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import hero_img_mobile from '../../public/assets/home/mobile/image-hero.jpg';
import speaker_zx9_img_mobile from '../../public/assets/home/mobile/image-speaker-zx9.webp';
import speaker_zx7_img_mobile from '../../public/assets/home/mobile/image-speaker-zx7.jpg';
import earphones_yx1_img_mobile from '../../public/assets/home/mobile/image-earphones-yx1.jpg';

import hero_img_tablet from '../../public/assets/home/tablet/image-hero.jpg';
import speaker_zx9_img_tablet from '../../public/assets/home/tablet/image-speaker-zx9.png';
import speaker_zx7_img_tablet from '../../public/assets/home/tablet/image-speaker-zx7.jpg';
import earphones_yx1_img_tablet from '../../public/assets/home/tablet/image-earphones-yx1.jpg';

import hero_img_desktop from '../../public/assets/home/desktop/image-hero.jpg';
import speaker_zx9_img_desktop from '../../public/assets/home/desktop/image-speaker-zx9.png';
import speaker_zx7_img_desktop from '../../public/assets/home/desktop/image-speaker-zx7.jpg';
import earphones_yx1_img_desktop from '../../public/assets/home/desktop/image-earphones-yx1.jpg';

export let queriedImages: {
	homepage: StaticImageData[];
	productPreview: StaticImageData[];
};

export const homepageMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			homepage: [hero_img_mobile],
			productPreview: [
				speaker_zx9_img_mobile,
				speaker_zx7_img_mobile,
				earphones_yx1_img_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			homepage: [hero_img_tablet],
			productPreview: [
				speaker_zx9_img_tablet,
				speaker_zx7_img_tablet,
				earphones_yx1_img_tablet,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			homepage: [hero_img_desktop],
			productPreview: [
				speaker_zx9_img_desktop,
				speaker_zx7_img_desktop,
				earphones_yx1_img_desktop,
			],
		};
	}
};
