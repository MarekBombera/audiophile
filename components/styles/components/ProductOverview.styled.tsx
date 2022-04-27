import styled from 'styled-components';

export const ProductOverviewStyled = styled.div`
	padding: 0 1.5rem;

	@media (min-width: 768px) {
		padding: 0 2rem;
	}

	@media (min-width: 1366px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 10rem;
	}

	@media (min-width: 1920px) {
		padding: 0rem 20rem;
	}
`;

export const ImgWrapper = styled.div`
	@media (min-width: 1366px) {
		grid-column: ${({ gridColumn }: { gridColumn: string }): string =>
			gridColumn};
		grid-row: 1/1;
		width: 500px;
	}

	img {
		border-radius: 8px;
	}
`;

export const Content = styled.div`
	display: grid;
	flex-direction: column;
	gap: 1.5rem;

	@media (min-width: 768px) {
	}

	@media (min-width: 1366px) {
		grid-row: 1/1;
		align-items: center;
		align-content: center;
	}

	h4 {
		margin: 1.5rem 0 0;
		text-align: center;
		font-size: 0.875rem;
		letter-spacing: 10px;
		color: var(--orange);

		@media (min-width: 1366px) {
			text-align: start;
		}
	}

	h2 {
		justify-self: center;
		margin: 0rem;
		text-align: center;
		font-size: 1.75rem;
		line-height: 38px;
		letter-spacing: 1px;

		@media (min-width: 768px) {
			width: 39%;
			font-size: 2.5rem;
			line-height: 44px;
			letter-spacing: 1.43px;
		}

		@media (min-width: 1366px) {
			justify-self: flex-start;
			text-align: start;
			width: 54%;
		}
	}

	p {
		justify-self: center;
		margin: 0rem;
		text-align: center;
		font-size: 0.9375rem;
		line-height: 25px;
		opacity: 0.5;

		@media (min-width: 768px) {
			width: 80%;
		}

		@media (min-width: 1366px) {
			justify-self: flex-start;
			text-align: start;
			width: 70%;
		}
	}

	button {
		justify-self: center;

		@media (min-width: 1366px) {
			justify-self: flex-start;
		}
	}
`;
