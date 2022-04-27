import { StaticImageData } from 'next/image';
import { AlsoLikeItem } from '../AlsoLikeItem/AlsoLikeItem';
import {
	AlsoLikeListStyle,
	Heading,
	List,
} from '../styles/components/AlsoLikeList.styled';

type Props = {
	imgs: StaticImageData[];
	productsNames: string[];
	links: string[];
};

export const AlsoLikeList = ({
	imgs,
	productsNames,
	links,
}: Props): JSX.Element => {
	return (
		<>
			<AlsoLikeListStyle>
				<Heading>
					<h2>you may also like</h2>
				</Heading>
				<List>
					<AlsoLikeItem
						img={imgs[0]}
						productName={productsNames[0]}
						link={links[0]}
					/>
					<AlsoLikeItem
						img={imgs[1]}
						productName={productsNames[1]}
						link={links[1]}
					/>
					<AlsoLikeItem
						img={imgs[2]}
						productName={productsNames[2]}
						link={links[2]}
					/>
				</List>
			</AlsoLikeListStyle>
		</>
	);
};
