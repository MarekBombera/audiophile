import type { NextPage } from 'next';

import { CategoryHeading } from '../components/CategoryHeading/CategoryHeading';
import { ProductOverview } from '../components/ProductOverview/ProductOverview';
import { ProductCategoryList } from '../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../components/Story/Story';

import {
	speakersPageMediaQueryImages,
	queriedImages,
} from '../utils/queryImages/speakersPageMediaQueryImages';

import { SpeakersStyled } from '../components/styles/pages/Speakers.styled';
import { ProductOverviewList } from '../components/styles/pages/Headphones.styled';

const SpeakersPage: NextPage = (): JSX.Element | null => {
	speakersPageMediaQueryImages();

	if (queriedImages === undefined) return null;

	const { speakers } = queriedImages;

	return (
		<SpeakersStyled>
			<CategoryHeading text="speakers" />
			<ProductOverviewList>
				<ProductOverview
					img={speakers[0]}
					newProduct={true}
					productName="ZX9 SPEAKER"
					productText="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
					gridColumn="1/1"
					link="./speakers/zx9"
				/>
				<ProductOverview
					img={speakers[1]}
					newProduct={false}
					productName="ZX7 SPEAKER"
					productText="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
					gridColumn="2/-1"
					link="./speakers/zx7"
				/>
			</ProductOverviewList>
			<ProductCategoryList />
			<Story />
		</SpeakersStyled>
	);
};

export default SpeakersPage;
