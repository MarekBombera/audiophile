import {
	ProductFeaturesStyled,
	Content,
} from '../styles/components/ProductFeatures.styled';

type Props = {
	text1: string;
	text2: string;
};

export const ProductFeatures = ({ text1, text2 }: Props): JSX.Element => {
	return (
		<ProductFeaturesStyled>
			<h2>features</h2>
			<Content>
				<p>{text1}</p>
				<p>{text2}</p>
			</Content>
		</ProductFeaturesStyled>
	);
};
