import type { NextPage } from 'next';

import { ProductDetail } from '../../components/ProductDetail/ProductDetail';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { BoxItem } from '../../components/BoxItem/BoxItem';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { AlsoLikeList } from '../../components/AlsoLikeList/AlsoLikeList';
import { ProductCategoryList } from '../../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../../components/Story/Story';

import {
	zx7MediaQueryImages,
	queriedImages,
} from '../../utils/queryImages/zx7PageMediaQueryImages';

import {
	InTheBoxStyled,
	ProductPageStyled,
	BoxList,
} from '../../components/styles/pages/ProductPage.styled';
import { ProductStyled } from '../../components/styles/components/Product.styled';

const zx7: NextPage = (): JSX.Element | null => {
	zx7MediaQueryImages();

	if (queriedImages === undefined) return null;

	const { zx7, gallery, alsoLike } = queriedImages;

	return (
		<ProductPageStyled>
			<ProductStyled>
				<ProductDetail
					img={zx7}
					newProduct={false}
					productName="zx7 speaker"
					productText="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
					price={'3,500'}
					addToCartInfo={['zx7', 3500]}
				/>
				<ProductFeatures
					text1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
					text2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
				/>
				<InTheBoxStyled>
					<h2>in the box</h2>
					<BoxList>
						<BoxItem quantity="2" item="Speaker Unit" />
						<BoxItem quantity="2" item="Speaker Cloth Panel" />
						<BoxItem quantity="1" item="User Manual" />
						<BoxItem quantity="1" item="3.5mm 7.5m Audio Cable" />
						<BoxItem quantity="1" item="7.5m Optical Cable" />
					</BoxList>
				</InTheBoxStyled>
				<ProductGallery img1={gallery[0]} img2={gallery[1]} img3={gallery[2]} />
				<AlsoLikeList
					imgs={alsoLike}
					productsNames={['zx9 speaker', 'xx99 mark II', 'xx59']}
					links={['/speakers/zx9', '/headphones/xx99m2', '/headphones/xx59']}
				/>
				<ProductCategoryList />
				<Story />
			</ProductStyled>
		</ProductPageStyled>
	);
};

export default zx7;
