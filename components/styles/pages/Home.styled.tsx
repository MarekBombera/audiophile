import styled from 'styled-components';

export const HomeStyled = styled.section`
	display: grid;
`;

export const Hero = styled.div`
	position: relative;
	display: grid;
	place-items: center;
	align-content: center;
	height: 100vh;
	width: 100%;
	gap: 1.5rem;
	margin-bottom: 3.5rem;

	@media (min-width: 600px) and (orientation: landscape) {
		margin-bottom: 50rem;
	}

	@media (min-width: 768px) {
		margin-bottom: 7rem;
	}

	@media (min-width: 1366px) {
		margin-bottom: 6rem;
		padding: 0rem 15rem;
	}

	@media (min-width: 1920px) {
		padding: 0rem 25rem;
	}

	h3 {
		margin: 0 0 0;
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 10px;
		color: white;
		opacity: 0.5;

		@media (min-width: 1366px) {
			justify-self: flex-start;
			font-size: 1rem;
			margin: 5rem 0 0;
		}

		@media (min-width: 1920px) {
			margin: 0rem;
		}
	}

	h1 {
		margin: 0;
		text-align: center;
		font-size: 2.25rem;
		line-height: 40px;
		letter-spacing: 1.3px;
		color: white;

		@media (min-width: 768px) {
			font-size: 3.5rem;
			line-height: 58px;
			letter-spacing: 2px;
		}

		@media (min-width: 1366px) {
			justify-self: flex-start;
			width: 41%;

			text-align: start;
			font-size: 3.6rem;
		}
	}

	p {
		width: 80%;
		margin: 0;
		text-align: center;
		font-size: 0.9375rem;
		line-height: 25px;
		color: white;
		opacity: 0.75;

		@media (min-width: 768px) {
			width: 45%;
		}

		@media (min-width: 1366px) {
			justify-self: flex-start;
			text-align: start;
			width: 35%;

			font-size: 1rem;
		}
	}

	button {
		margin: 1rem 0 0 0;

		@media (min-width: 1366px) {
			justify-self: flex-start;
		}
	}
`;

export const ImgWrapper = styled.div`
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 102.5vh;
	background: black;

	@media (min-width: 1366px) {
		padding-left: 5rem;
		height: 102.5vh;
	}

	@media (min-width: 1920px) {
		padding-left: 20rem;
	}
`;
