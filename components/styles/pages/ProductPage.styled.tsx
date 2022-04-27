import styled from 'styled-components';

export const ProductPageStyled = styled.div`
	display: grid;
`;

export const InTheBoxStyled = styled.div`
	padding: 0 1.5rem;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 2rem;
	}

	@media (min-width: 1366px) {
		display: flex;
		flex-direction: column;
		padding: 0 0 0 7rem;
		gap: 3.1rem;
	}

	h2 {
		margin-top: 0;
		b @media (min-width: 1366px) {
			margin: 0;
		}
	}
`;

export const BoxList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
