import styled from 'styled-components';

export const StoryStyled = styled.div`
	padding: 0 1.5rem;
	margin: 0 0 4rem;

	@media (min-width: 768px) {
		padding: 0 2rem 4rem;
		margin: 0rem;
	}

	@media (min-width: 1366px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column: 1/-1;
		margin: 5rem 0 8rem;
		padding: 0 15rem;
		gap: 2.2rem;
	}

	@media (min-width: 1920px) {
		padding: 0 25rem;
	}
`;

export const ImgWrapper = styled.div`
	@media (min-width: 1366px) {
		position: relative;
		grid-column: 2/2;
		width: 100%;
	}

	span {
		@media (min-width: 1366px) {
			position: static !important;
		}
	}

	img {
		border-radius: 8px;
	}
`;

export const Text = styled.div`
	@media (min-width: 1366px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		// padding: 0 0 0 10rem;
	}

	h2 {
		padding: 0.75rem 0;
		text-align: center;
		font-size: 1.8rem;
		line-height: 38px;
		letter-spacing: 1px;

		@media (min-width: 768px) {
			padding: 2rem 6rem;
			font-size: 2.5rem;
			line-height: 44px;
			letter-spacing: 1.42857px;
		}

		@media (min-width: 1366px) {
			width: 77%;
			padding: 0;
			text-align: start;
		}

		span {
			color: var(--orange);
		}
	}

	p {
		text-align: center;
		font-size: 0.9375rem;
		font-weight: 500;
		line-height: 25px;
		opacity: 0.5;

		@media (min-width: 768px) {
			padding: 0 4rem;
		}

		@media (min-width: 1366px) {
			padding: 0;
			text-align: start;
			width: 85%;
		}
	}

	@media (min-width: 1366px) {
		grid-column: 1/1;
		grid-row: 1/1;
	}
`;
