import styled from 'styled-components';

export const ItemCounterStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	padding: 0 1rem;
	gap: 1rem;
	background: rgba(241, 241, 241);

	p {
		font-size: 0.8125rem;
		font-weight: 700;
		color: black;
		opacity: 1 !important;

		@media (min-width: 1366px) {
			font-size: 0.9375rem;
		}
	}

	@media (min-width: 768px) {
		padding: 0 1.25rem;
	}
`;

export const CounterButton = styled.button`
	display: flex;
	outline: none;
	border: none;
	background: none;
	color: rgba(0, 0, 0, 0.25);

	@media (min-width: 1366px) {
		font-size: 0.9375rem;
	}

	@media (min-width: 1920px) {
		font-size: 1.1rem;
	}

	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
			color: var(--orange);
		}
	}
`;
