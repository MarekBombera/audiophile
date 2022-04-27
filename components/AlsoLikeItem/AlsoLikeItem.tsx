import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button/Button';
import { AlsoLikeItemStyled } from '../styles/components/AlsoLikeItem.styled';

type Props = {
	img: StaticImageData;
	productName: string;
	link: string;
};

export const AlsoLikeItem = ({
	img,
	productName,
	link,
}: Props): JSX.Element => {
	return (
		<AlsoLikeItemStyled>
			<Image src={img} alt="" />
			<h2>{productName}</h2>
			<Button text="see product" link={link} />
		</AlsoLikeItemStyled>
	);
};
