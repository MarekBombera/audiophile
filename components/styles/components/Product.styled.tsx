import styled from 'styled-components';

export const ProductStyled = styled.div`
	display: grid;
	margin: 5rem 0 3rem;
	gap: 4rem;

	@media (min-width: 1366px) {
		grid-template-columns: 1fr 1fr;
	}
`;
