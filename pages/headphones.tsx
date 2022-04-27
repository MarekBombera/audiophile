import type { NextPage } from 'next';

import { CategoryHeading } from '../components/CategoryHeading/CategoryHeading';
import { ProductOverview } from '../components/ProductOverview/ProductOverview';
import { ProductCategoryList } from '../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../components/Story/Story';

import {
	headphonesPageMediaQueryImages,
	queriedImages,
} from '../utils/queryImages/headphonesPageMediaQueryImages';

import {
	HeadphonesStyled,
	ProductOverviewList,
} from '../components/styles/pages/Headphones.styled';

const HeadphonesPage: NextPage = (): JSX.Element | null => {
	headphonesPageMediaQueryImages();

	if (queriedImages === undefined) return null;

	const { headphones } = queriedImages;

	return (
		<HeadphonesStyled>
			<CategoryHeading text="headphones" />
			<ProductOverviewList>
				<ProductOverview
					img={headphones[0]}
					newProduct={true}
					productName="XX99 Mark II Headphones"
					productText="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
					gridColumn="1/1"
					link="./headphones/xx99m2"
				/>
				<ProductOverview
					img={headphones[1]}
					newProduct={false}
					productName="XX99 Mark I Headphones"
					productText="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
					gridColumn="2/-1"
					link="./headphones/xx99m1"
				/>
				<ProductOverview
					img={headphones[2]}
					newProduct={false}
					productName="XX59 Headphones"
					productText="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
					gridColumn="1/1"
					link="./headphones/xx59"
				/>
			</ProductOverviewList>
			<ProductCategoryList />
			<Story />
		</HeadphonesStyled>
	);
};

export default HeadphonesPage;
