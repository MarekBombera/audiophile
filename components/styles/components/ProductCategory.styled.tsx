import styled from 'styled-components';

export const ProductCategoryStyled = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	align-items: center;
	justify-items: center;
	margin: 5rem 1.5rem 0;
	height: 165px;
	background: var(--silver);
	border-radius: 8px;

	@media (min-width: 600px) {
		width: 100%;
		margin: 0;
	}

	@media (min-width: 1366px) {
		height: 205px;
		margin: 4rem 0;
	}

	h4 {
		grid-row: 2/2;
		align-self: flex-end;
		margin: 0;
		font-size: 0.9375rem;

		@media (min-width: 1366px) {
			font-size: 1.125rem;
		}
	}
`;

export const ImgWrapper = styled.div`
	position: absolute;
	top: -34%;
	width: 150px;

	@media (min-width: 1366px) {
		top: -33%;
		width: 205px;
	}
`;

export const CallToAction = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	grid-row: 3/3;
	margin: 0 0 0.5rem;
	& > span,
	& > p {
		transition: all 0.2s ease-out;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > p {
		@media (min-width: 1366px) {
			color: var(--orange);
			opacity: 1;
		}
	}

	&:hover > span {
		@media (min-width: 1366px) {
			transform: translateX(3px);
		}
	}

	p {
		font-size: 0.8125;
		font-weight: 700;
		text-transform: uppercase;
		opacity: 0.5;
	}
`;
