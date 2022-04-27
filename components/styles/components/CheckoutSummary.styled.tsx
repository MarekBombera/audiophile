import styled from 'styled-components';

export const CheckoutSummaryStyled = styled.div`
	display: grid;

	padding: 1.75rem 1.4rem;
	gap: 1.5rem;
	background: white;
	border-radius: 8px;

	@media (min-width: 768px) {
		padding: 2.25rem 2rem;
	}

	@media (min-width: 1366px) {
		align-self: flex-start;
		width: 350px;
	}

	@media (min-width: 1920px) {
		width: 375px;
	}
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-between;

	h3 {
		margin: 0;
		font-size: 1.125rem;
		letter-spacing: 1.28571px;
	}

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-decoration-line: underline;
		opacity: 0.5;

		&:hover {
			cursor: pointer;
			color: var(--orange);
			opacity: 1;
		}
	}
`;

export const PriceSummary = styled.div`
	display: grid;
	gap: 0.75rem;
`;

export const Field = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-transform: uppercase;
		opacity: 0.5;
	}

	h3 {
		margin: 0;
		font-size: 1.125rem;
	}
`;

export const GrandTotal = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem 0;

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-transform: uppercase;
		opacity: 0.5;
	}

	h3 {
		margin: 0;
		font-size: 1.125rem;
		color: var(--orange);
	}
`;
