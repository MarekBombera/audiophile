import styled from 'styled-components';

export const CategoryListStyled = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		margin: 2rem 0 0;
		padding: 0 2rem;
		gap: 1rem;
	}

	@media (min-width: 1366px) {
		padding: 0 10rem;
		gap: 2rem;
		grid-column: 1/-1;
	}

	@media (min-width: 1920px) {
		padding: 0 20rem;
	}
`;
