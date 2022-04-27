import styled from 'styled-components';

export const ProductDetailStyled = styled.div`
	display: grid;
	padding: 0 1.5rem;
	margin: 5rem 0 0;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 2rem;
		gap: 4rem;
	}

	@media (min-width: 1366px) {
		padding: 0 10rem;
		grid-column: 1/-1;
	}

	@media (min-width: 1920px) {
		padding: 0 20rem;
	}
`;

export const ImgWrapper = styled.div`
	img {
		border-radius: 8px;
	}
`;

export const Content = styled.div`
	display: grid;
	flex-direction: column;
	gap: 1.5rem;

	@media (min-width: 768px) {
		align-content: center;
	}

	h4 {
		margin: 1.5rem 0 0;
		font-size: 0.875rem;
		letter-spacing: 10px;
		color: var(--orange);

		@media (min-width: 768px) {
			margin: 0;
		}

		@media (min-width: 1366px) {
			text-align: start;
		}
	}

	h2 {
		justify-self: center;
		margin: 0rem;
		font-size: 1.75rem;
		line-height: 32px;
		letter-spacing: 1px;

		@media (min-width: 768px) {
			justify-self: flex-start;
			text-align: start;
			font-size: 1.75rem;
		}

		@media (min-width: 1366px) {
			font-size: 2.5rem;
			line-height: 44px;
			letter-spacing: 1.42857px;
			width: 56%;
		}
	}

	p {
		justify-self: center;
		margin: 0rem;
		font-size: 0.9375rem;
		line-height: 25px;
		opacity: 0.6;

		@media (min-width: 768px) {
			justify-self: flex-start;
		}

		@media (min-width: 1366px) {
			width: 80%;
		}
	}

	h5 {
		margin: 0 0 0.25rem;
		font-size: 1.125rem;
		letter-spacing: 1.28571px;
	}

	button {
		justify-self: center;

		@media (min-width: 1366px) {
			justify-self: flex-start;
		}
	}
`;

export const AddToCart = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Counter = styled.div`
	background: rgba(241, 241, 241);
	p {
		color: black;
	}
`;
