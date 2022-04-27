import Image, { StaticImageData } from 'next/image';

import {
	ProductGalleryStyled,
	ImgWrapper_1,
	ImgWrapper_2,
	ImgWrapper_3,
} from '../styles/components/ProductGallery.styled';

type Props = {
	img1: StaticImageData;
	img2: StaticImageData;
	img3: StaticImageData;
};

export const ProductGallery = ({ img1, img2, img3 }: Props): JSX.Element => {
	return (
		<ProductGalleryStyled>
			<ImgWrapper_1>
				<Image src={img1} alt="" />
			</ImgWrapper_1>
			<ImgWrapper_2>
				<Image src={img2} alt="" />
			</ImgWrapper_2>
			<ImgWrapper_3>
				<Image src={img3} alt="" />
			</ImgWrapper_3>
		</ProductGalleryStyled>
	);
};
