import { StaticImageData } from 'next/image';
import { Preview_1 } from './Preview_1';
import { Preview_2 } from './Preview_2';
import { Preview_3 } from './Preview_3';

import { ProductPreviewStyled } from '../styles/components/ProductPreview.styled';

type Props = {
	mediaImages: StaticImageData[];
};

export const ProductPreview = ({ mediaImages }: Props): JSX.Element => {
	return (
		<ProductPreviewStyled>
			<Preview_1 mediaImage={mediaImages[0]} />
			<Preview_2 mediaImage={mediaImages[1]} />
			<Preview_3 mediaImage={mediaImages[2]} />
		</ProductPreviewStyled>
	);
};
