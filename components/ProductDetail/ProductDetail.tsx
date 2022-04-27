import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image, { StaticImageData } from 'next/image';

import { Button } from '../Button/Button';
import { ItemCounter } from '../ItemCounter/ItemCounter';

import { addToCart } from '../../utils/addToCart/addToCart';
import { addToCartAnimation } from '../../utils/addToCartAnimation/addToCartAnimation';

import {
	ProductDetailStyled,
	ImgWrapper,
	Content,
	AddToCart,
} from '../styles/components/ProductDetail.styled';

type Props = {
	img: StaticImageData;
	newProduct: boolean;
	productName: string;
	productText: string;
	price: string;
	addToCartInfo: [string, number];
};

export const ProductDetail = ({
	img,
	newProduct,
	productName,
	productText,
	price,
	addToCartInfo,
}: Props): JSX.Element => {
	const [quantityCounter, setQuantityCounter] = useState(1);
	const {
		shoppingCart: { cart },
	} = useSelector((state: any) => state);
	const dispatch = useDispatch();

	const renderNewProduct = (): string | null => {
		return newProduct ? 'new product' : null;
	};

	const handleAddToCartClick = (): void => {
		for (let i in cart) {
			if (cart[i].itemName === addToCartInfo[0]) return;
		}
		addToCartAnimation();
		addToCart(dispatch, addToCartInfo[0], addToCartInfo[1], quantityCounter);
	};

	return (
		<ProductDetailStyled>
			<ImgWrapper>
				<Image src={img} alt="" />
			</ImgWrapper>
			<Content>
				<h4>{renderNewProduct()}</h4>
				<h2>{productName}</h2>
				<p>{productText}</p>
				<h5>{`$ ${price}`}</h5>
				<AddToCart>
					<ItemCounter
						quantityCounter={quantityCounter}
						setQuantityCounter={setQuantityCounter}
					/>
					<Button text="add to cart" onClick={handleAddToCartClick} />
				</AddToCart>
			</Content>
		</ProductDetailStyled>
	);
};
