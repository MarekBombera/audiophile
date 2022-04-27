import { BoxItemStyled } from '../styles/components/BoxItem.styled';

type Props = {
	quantity: string;
	item: string;
};

export const BoxItem = ({ quantity, item }: Props): JSX.Element => {
	return (
		<BoxItemStyled>
			<h5>{`${quantity}x`}</h5>
			<p>{item}</p>
		</BoxItemStyled>
	);
};
