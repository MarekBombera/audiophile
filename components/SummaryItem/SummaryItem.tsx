import Image from 'next/image';
import { SummaryItemStyled } from '../styles/components/SummaryItem.styled';
import {
	Content,
	ItemSummary,
	ImgWrapper,
} from '../styles/components/ShoppingCartItem.styled';

type Props = {
	itemName: string;
	price: number;
	img: string;
	quantity: number;
};

export const SummaryItem = ({
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
			<p>{`x${quantity}`}</p>
		</SummaryItemStyled>
	);
};
