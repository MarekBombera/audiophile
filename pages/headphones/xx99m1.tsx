import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	xx99m1MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/xx99m1PageMediaQueryImages';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const XX99m1: NextPage = (): JSX.Element | null => {
	xx99m1MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { xx99m1, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={xx99m1}
					newProduct={false}
					productName="XX99 Mark I Headphones"
					productText="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
					price={'1,750'}
					addToCartInfo={['xx99 mki', 1750]}
				/>
				<ProductFeatures
					text1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
					text2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
				/>
				<InTheBoxStyled>
					<h2>in the box</h2>
					<BoxList>
						<BoxItem quantity="1" item="Headphone Unit" />
						<BoxItem quantity="2" item="Replacement Earcups" />
						<BoxItem quantity="1" item="User Manual" />
						<BoxItem quantity="1" item="3.5mm 5m Audio Cable" />
						<BoxItem quantity="1" item="Travel Bag" />
					</BoxList>
				</InTheBoxStyled>
				<ProductGallery img1={gallery[0]} img2={gallery[1]} img3={gallery[2]} />
				<AlsoLikeList
					imgs={alsoLike}
					productsNames={['xx99 mark II', 'xx59', 'zx9 speaker']}
					links={['/headphones/xx99m2', '/headphones/xx59', '/speakers/zx9']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default XX99m1;
