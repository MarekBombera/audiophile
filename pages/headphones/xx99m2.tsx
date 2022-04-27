import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	xx99m2MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/xx99m2PageMediaQueryImages';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const XX99m2: NextPage = (): JSX.Element | null => {
	xx99m2MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { xx99m2, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={xx99m2}
					newProduct={true}
					productName="XX99 Mark II Headphones"
					productText="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
					price={'2,999'}
					addToCartInfo={['xx99 mkii', 2999]}
				/>
				<ProductFeatures
					text1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
					text2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
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
					productsNames={['xx99 mark I', 'xx59', 'zx9 speaker']}
					links={['/headphones/xx99m1', '/headphones/xx59', '/speakers/zx9']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default XX99m2;
