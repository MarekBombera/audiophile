import styled from 'styled-components';

export const HeadphonesStyled = styled.div`
	display: grid;
	gap: 4rem;

	@media (min-width: 768px) {
		gap: 6rem;
	}

	@media (min-width: 1366px) {
		gap: 0rem;
	}
`;

export const ProductOverviewList = styled.div`
	display: grid;
	gap: 6rem;

	@media (min-width: 1366px) {
		margin: 6rem 0 4rem;
	}
`;
