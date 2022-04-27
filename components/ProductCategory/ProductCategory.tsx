import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
	ProductCategoryStyled,
	CallToAction,
	ImgWrapper,
} from '../styles/components/ProductCategory.styled';

import arrow_right from '../../public/assets/shared/desktop/icon-arrow-right.svg';

type Props = {
	img: StaticImageData;
	text: string;
	link: string;
};

export const ProductCategory = ({ img, text, link }: Props): JSX.Element => {
	return (
		<ProductCategoryStyled>
			<ImgWrapper>
				<Image src={img} alt="" />
			</ImgWrapper>
			<h4>{text}</h4>
			<CallToAction>
				<Link href={link}>
					<p>shop</p>
				</Link>
				<Link href={link} passHref>
					<Image src={arrow_right} alt="" />
				</Link>
			</CallToAction>
		</ProductCategoryStyled>
	);
};
