import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button/Button';

import {
	PreviewStyled_3,
	TextWrapper,
} from '../styles/components/ProductPreview.styled';

type Props = {
	mediaImage: StaticImageData;
};

export const Preview_3 = ({ mediaImage }: Props): JSX.Element => {
	return (
		<PreviewStyled_3>
			<Image src={mediaImage} alt="" />
			<TextWrapper>
				<h2>yx1 earphones</h2>
				<Button text="see product" link="./earphones/yx1" />
			</TextWrapper>
		</PreviewStyled_3>
	);
};
