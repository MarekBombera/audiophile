import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	zx9MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/zx9PageMediaQueryImages';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const zx9: NextPage = (): JSX.Element | null => {
	zx9MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { zx9, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={zx9}
					newProduct={true}
					productName="ZX9 speaker"
					productText="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
					price={'4,500'}
					addToCartInfo={['zx9', 4500]}
				/>
				<ProductFeatures
					text1="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
					text2="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
				/>
				<InTheBoxStyled>
					<h2>in the box</h2>
					<BoxList>
						<BoxItem quantity="2" item="Speaker Unit" />
						<BoxItem quantity="2" item="Speaker Cloth Panel" />
						<BoxItem quantity="1" item="User Manual" />
						<BoxItem quantity="1" item="3.5mm 10m Audio Cable" />
						<BoxItem quantity="1" item="10m Optical Cable" />
					</BoxList>
				</InTheBoxStyled>
				<ProductGallery img1={gallery[0]} img2={gallery[1]} img3={gallery[2]} />
				<AlsoLikeList
					imgs={alsoLike}
					productsNames={['zx7 speaker', 'xx99 mark I', 'xx59']}
					links={['/speakers/zx7', '/headphones/xx99m1', '/headphones/xx59']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default zx9;
