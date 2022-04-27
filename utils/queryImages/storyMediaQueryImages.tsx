import { StaticImageData } from 'next/image';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import story_image_mobile from '../../public/assets/shared/mobile/image-best-gear.jpg';
import story_image_tablet from '../../public/assets/shared/tablet/image-best-gear.jpg';
import story_image_desktop from '../../public/assets/shared/desktop/image-best-gear.jpg';

export let queriedImages: {
	story: StaticImageData;
};

export const storyMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			story: story_image_mobile,
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			story: story_image_tablet,
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			story: story_image_desktop,
		};
	}
};
