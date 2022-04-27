import styled from 'styled-components';

export const CheckoutFormStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1.75rem 0;
	gap: 1rem;
	border-radius: 8px;

	@media (min-width: 768px) {
	}

	@media (min-width: 1366px) {
		flex-direction: row !important;
		margin: 2rem 0;
	}

	h1 {
		margin: 0 0 0.5rem;
		font-size: 1.75rem;
		letter-spacing: 1px;

		@media (min-width: 768px) {
			font-size: 2rem;
			letter-spacing: 1.14286px;
		}
	}
`;
