import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button/Button';

import {
	PreviewStyled_2,
	ImgWrapper_2,
} from '../styles/components/ProductPreview.styled';

type Props = {
	mediaImage: StaticImageData;
};

export const Preview_2 = ({ mediaImage }: Props): JSX.Element => {
	return (
		<PreviewStyled_2>
			<ImgWrapper_2>
				<Image src={mediaImage} alt="" />
			</ImgWrapper_2>
			<h2>zx7 speaker</h2>
			<Button text="see product" link="./speakers/zx7" />
		</PreviewStyled_2>
	);
};
