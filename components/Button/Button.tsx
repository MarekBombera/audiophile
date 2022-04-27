import Link from 'next/link';
import { ButtonStyled } from '../styles/components/Button.styled';

type Props = {
	text: string;
	link?: string;
	onClick?: any;
	type?: any;
};

export const Button = ({ text, link, onClick, type }: Props): JSX.Element => {
	const addHref = (): string => {
		if (link === undefined) return '';

		return link;
	};

	const hrefButton = (
		<Link href={addHref()}>
			<ButtonStyled>{text}</ButtonStyled>
		</Link>
	);

	const onClickButton = (
		<ButtonStyled onClick={onClick} type={type === undefined ? 'button' : type}>
			{text}
		</ButtonStyled>
	);

	return <>{link !== undefined ? hrefButton : onClickButton}</>;
};
