import { CategoryHeadingStyled } from '../styles/components/CategoryHeading.styled';

type Props = {
	text: String;
};

export const CategoryHeading = ({ text }: Props): JSX.Element => {
	return (
		<CategoryHeadingStyled>
			<h2>{text}</h2>
		</CategoryHeadingStyled>
	);
};
