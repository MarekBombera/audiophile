import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button/Button';

import {
	PreviewStyled_1,
	ImgWrapper_1,
	CirclePattern,
} from '../styles/components/ProductPreview.styled';

import pattern_circles from '../../public/assets/home/desktop/pattern-circles.svg';

type Props = {
	mediaImage: StaticImageData;
};

export const Preview_1 = ({ mediaImage }: Props): JSX.Element => {
	return (
		<PreviewStyled_1>
			<CirclePattern>
				<Image src={pattern_circles} alt="" />
			</CirclePattern>
			<ImgWrapper_1>
				<Image src={mediaImage} />
			</ImgWrapper_1>
			<h2>zx9 speaker</h2>
			<p>
				Upgrade to premium speakers that are phenomenally built to deliver truly
				remarkable sound.
			</p>
			<Button text="see product" link="./speakers/zx9" />
		</PreviewStyled_1>
	);
};
