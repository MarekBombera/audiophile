import Image from 'next/image';
import { CartItemCounter } from '../ItemCounter/CartItemCounter';
import {
	SummaryItemStyled,
	Content,
	ItemSummary,
	ImgWrapper,
} from '../styles/components/SummaryItem.styled';

type Props = {
	itemName: string;
	price: number;
	img: string;
	quantity: number;
};

export const ShoppingCartItem = ({
	itemName,
	price,
	img,
	quantity,
}: Props): JSX.Element => {
	return (
		<SummaryItemStyled>
			<ItemSummary>
				<ImgWrapper>
					<Image src={img} alt="" />
				</ImgWrapper>
				<Content>
					<h4>{itemName}</h4>
					<p>{`$ ${price}`}</p>
				</Content>
			</ItemSummary>
			<CartItemCounter price={price} quantity={quantity} itemName={itemName} />
		</SummaryItemStyled>
	);
};
