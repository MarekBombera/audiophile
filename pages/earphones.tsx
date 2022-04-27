import type { NextPage } from 'next';

import { CategoryHeading } from '../components/CategoryHeading/CategoryHeading';
import { ProductOverview } from '../components/ProductOverview/ProductOverview';
import { ProductCategoryList } from '../components/ProductCategoryList/ProductCategoryList';
import { Story } from '../components/Story/Story';

import {
	earphonesPageMediaQueryImages,
	queriedImages,
} from '../utils/queryImages/earphonesPageMediaQueryImages';

import { EarphonesStyled } from '../components/styles/pages/Earphones.styled';
import { ProductOverviewList } from '../components/styles/pages/Headphones.styled';

const EarphonesPage: NextPage = (): JSX.Element | null => {
	earphonesPageMediaQueryImages();

	if (queriedImages === undefined) return null;

	const { earphones } = queriedImages;

	return (
		<EarphonesStyled>
			<CategoryHeading text="earphones" />
			<ProductOverviewList>
				<ProductOverview
					img={earphones[0]}
					newProduct={true}
					productName="YX1 WIRELESS EARPHONES"
					productText="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
					gridColumn="1/1"
					link="./earphones/yx1"
				/>
			</ProductOverviewList>
			<ProductCategoryList />
			<Story />
		</EarphonesStyled>
	);
};

export default EarphonesPage;
