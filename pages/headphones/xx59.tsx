import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';

import {
	xx59MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/xx59PageMediaQueryImages';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const xx59: NextPage = (): JSX.Element | null => {
	xx59MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { xx59, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={xx59}
					newProduct={false}
					productName="XX59"
					productText="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
					price={'899'}
					addToCartInfo={['xx59', 899]}
				/>
				<ProductFeatures
					text1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
					text2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
				/>
				<InTheBoxStyled>
					<h2>in the box</h2>
					<BoxList>
						<BoxItem quantity="1" item="Headphone Unit" />
						<BoxItem quantity="2" item="Replacement Earcups" />
						<BoxItem quantity="1" item="User Manual" />
						<BoxItem quantity="1" item="3.5mm 5m Audio Cable" />
					</BoxList>
				</InTheBoxStyled>
				<ProductGallery img1={gallery[0]} img2={gallery[1]} img3={gallery[2]} />
				<AlsoLikeList
					imgs={alsoLike}
					productsNames={['xx99 mark II', 'xx99 mark I', 'zx9 speaker']}
					links={['/headphones/xx99m2', '/headphones/xx99m1', '/speakers/zx9']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default xx59;
