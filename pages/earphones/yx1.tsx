import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	yx1MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/yx1PageMediaQueryImages';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const yx1: NextPage = (): JSX.Element | null => {
	yx1MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { yx1, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={yx1}
					newProduct={true}
					productName="YX1 WIRELESS
					EARPHONES"
					productText="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
					price={'599'}
					addToCartInfo={['yx1', 599]}
				/>
				<ProductFeatures
					text1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
					text2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
				/>
				<InTheBoxStyled>
					<h2>in the box</h2>
					<BoxList>
						<BoxItem quantity="2" item="Earphone Unit" />
						<BoxItem quantity="6" item="Multi-size Earplugs" />
						<BoxItem quantity="1" item="User Manual" />
						<BoxItem quantity="1" item="USB-C Charging Cable" />
						<BoxItem quantity="1" item="Travel Pouch" />
					</BoxList>
				</InTheBoxStyled>
				<ProductGallery img1={gallery[0]} img2={gallery[1]} img3={gallery[2]} />
				<AlsoLikeList
					imgs={alsoLike}
					productsNames={['xx99 mark I', 'xx59', 'zx59 speaker']}
					links={['/headphones/xx99m1', '/headphones/xx59', '/speakers/zx9']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default yx1;
