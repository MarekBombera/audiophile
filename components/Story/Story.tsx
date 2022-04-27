import Image from 'next/image';

import {
	storyMediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/storyMediaQueryImages';

import {
	StoryStyled,
	ImgWrapper,
	Text,
} from '../styles/components/Story.styled';

export const Story = (): JSX.Element | null => {
	storyMediaQueryImages();

	if (queriedImages === undefined) return null;

	const { story } = queriedImages;

	return (
		<StoryStyled>
			<ImgWrapper>
				<Image src={story} alt="" />
			</ImgWrapper>
			<Text>
				<h2>
					Bringing you the <span>best</span> audio gear
				</h2>
				<p>
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</Text>
		</StoryStyled>
	);
};
