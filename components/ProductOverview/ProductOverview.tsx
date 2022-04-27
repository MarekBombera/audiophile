import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button/Button';

import {
	ProductOverviewStyled,
	ImgWrapper,
	Content,
} from '../styles/components/ProductOverview.styled';

type Props = {
	img: StaticImageData;
	newProduct: boolean;
	productName: string;
	productText: string;
	gridColumn: string;
	link: string;
};

export const ProductOverview = ({
	img,
	newProduct,
	productName,
	productText,
	gridColumn,
	link,
}: Props): JSX.Element => {
	const renderNewProduct = (): string | null => {
		return newProduct ? 'new product' : null;
	};

	return (
		<ProductOverviewStyled>
			<ImgWrapper gridColumn={gridColumn}>
				<Image src={img} alt="" />
			</ImgWrapper>
			<Content>
				<h4>{renderNewProduct()}</h4>
				<h2>{productName}</h2>
				<p>{productText}</p>
				<Button text="see product" link={link} />
			</Content>
		</ProductOverviewStyled>
	);
};
