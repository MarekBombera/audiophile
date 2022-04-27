import type { NextPage } from 'next';
import Image from 'next/image';

import { Button } from '../components/Button/Button';
import { ProductCategoryList } from '../components/ProductCategoryList/ProductCategoryList';
import { ProductPreview } from '../components/ProductPreview/ProductPreview';
import { Story } from '../components/Story/Story';

import {
	homepageMediaQueryImages,
	queriedImages,
} from '../utils/queryImages/homeMediaQueryImages';

import {
	HomeStyled,
	Hero,
	ImgWrapper,
} from '../components/styles/pages/Home.styled';

const Home: NextPage = (): JSX.Element | null => {
	homepageMediaQueryImages();

	if (queriedImages === undefined) return null;

	const { homepage, productPreview } = queriedImages;

	return (
		<HomeStyled>
			<Hero>
				<ImgWrapper>
					<Image src={homepage[0]} />
				</ImgWrapper>
				<h3>new product</h3>
				<h1>XX99 Mark II Headphones</h1>
				<p>
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</p>
				<Button text="see product" link="./headphones/xx99m2" />
			</Hero>
			<ProductCategoryList />
			<ProductPreview mediaImages={productPreview} />
			<Story />
		</HomeStyled>
	);
};

export default Home;
