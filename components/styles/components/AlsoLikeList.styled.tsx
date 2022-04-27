import styled from 'styled-components';

export const AlsoLikeListStyle = styled.div`
	padding: 0rem 1.5rem;

	@media (min-width: 1366px) {
		grid-column: 1/-1;
		padding: 0rem 10rem;
	}

	@media (min-width: 1920px) {
		padding: 0rem 20rem;
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		gap: 1.25rem;
	}

	@media (min-width: 1366px) {
		gap: 2rem;
	}
`;

export const Heading = styled.div`
	text-align: center;
`;
