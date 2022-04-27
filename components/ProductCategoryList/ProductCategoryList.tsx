import { ProductCategory } from '../ProductCategory/ProductCategory';
import { CategoryListStyled } from '../styles/components/ProductCategoryList.styled';

import headphones_category_img from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers_category_img from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones_category_img from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png';

export const ProductCategoryList = ({ mobileStyle }: any): JSX.Element => {
	return (
		<CategoryListStyled mobileStyle={mobileStyle}>
			<ProductCategory
				img={headphones_category_img}
				text="headphones"
				link="/headphones"
			/>
			<ProductCategory
				img={speakers_category_img}
				text="speakers"
				link="/speakers"
			/>
			<ProductCategory
				img={earphones_category_img}
				text="earphones"
				link="/earphones"
			/>
		</CategoryListStyled>
	);
};
