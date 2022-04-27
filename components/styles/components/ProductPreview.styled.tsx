import styled from 'styled-components';

export const ProductPreviewStyled = styled.div`
	display: grid;
	margin: 5rem 1.5rem 2rem;
	gap: 2rem;

	@media (min-width: 414px) {
		gap: 3rem;
	}

	@media (min-width: 768px) {
		margin: 5rem 0 2rem;
		padding: 0 2rem;
		gap: 1.75rem;
	}

	@media (min-width: 1366px) {
		padding: 0 10rem;
	}

	@media (min-width: 1920px) {
		padding: 0 20rem;
	}
`;

export const PreviewStyled_1 = styled.div`
	position: relative;
	display: grid;
	place-items: center;
	align-content: flex-end;
	height: 600px;
	background: var(--orange);
	border-radius: 8px;
	overflow: hidden;

	@media (min-width: 768px) {
		height: 720px;
		padding: 0 0 1.5rem;
	}

	@media (min-width: 1366px) {
		grid-template-columns: 1fr 1fr;
		height: 560px;
		padding: 0;
	}

	button {
		margin: 0 0 3.5rem;
		background: black;
		z-index: 1;

		@media (min-width: 1366px) {
			grid-column: 2/2;
			justify-self: flex-start;
			align-self: flex-start;
		}

		&:hover {
			background: rgba(76, 76, 76, 1);
			cursor: pointer;
			@media (min-width: 1366px) {
			}
		}
	}

	h2 {
		padding: 0 5rem;
		margin: 2rem 0 0;
		text-align: center;
		font-size: 2.25rem;
		line-height: 40px;
		letter-spacing: 1.28571px;
		color: white;

		@media (min-width: 768px) {
			padding: 0 10rem;
			font-size: 3.5rem;
			line-height: 58px;
			letter-spacing: 2px;
		}

		@media (min-width: 1366px) {
			grid-column: 2/2;
			justify-self: flex-start;
			align-self: flex-end;
			text-align: start;
			margin: 0;
			padding: 0 20rem 0 0;
		}
	}

	p {
		width: 85%;
		margin: 1.5rem;
		text-align: center;
		font-size: 0.9375rem;
		line-height: 25px;
		color: white;
		opacity: 0.5;

		@media (min-width: 768px) {
			width: 50%;
		}

		@media (min-width: 1366px) {
			grid-column: 2/2;
			justify-self: flex-start;
			text-align: start;
			width: 60%;
			margin: 0;
		}
	}
`;

export const ImgWrapper_1 = styled.div`
	width: 150px;

	@media (min-width: 768px) {
		width: 195px;
	}

	@media (min-width: 1366px) {
		grid-column: 1/1;
		grid-row: 1/ 4;
		align-self: flex-end;
		width: 390px;
		transform: translateY(3.5%);
	}
`;

export const CirclePattern = styled.div`
	position: absolute;
	top: 0;
	transform: scale(1.65);

	@media (min-width: 768px) {
		top: -20%;
		transform: scale(1.25);
	}

	@media (min-width: 1366px) {
		top: -20%;
		left: -14.5%;
		transform: scale(1);
	}
`;

export const PreviewStyled_2 = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 320px;
	width: 100%;

	h2 {
		margin: 0 1.75rem 0;
		font-size: 1.75rem;
		letter-spacing: 2px;
	}

	button {
		margin: 1.5rem 1.75rem 0;
		padding: 0.9rem 1.9rem;
		color: black;
		background: none;
		border: 1px solid black;

		&:hover {
			@media (min-width: 1366px) {
				color: white;
				background: black;
			}
		}
	}
`;

export const ImgWrapper_2 = styled.div`
	position: absolute;
	width: 100%;
	z-index: -1;

	span {
		@media (min-width: 1366px) {
			position: static !important;
		}
	}

	img {
		border-radius: 8px;
	}
`;

export const PreviewStyled_3 = styled.div`
	display: grid;
	gap: 2rem;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 1.75rem;
	}

	img {
		border-radius: 8px;
	}

	button {
		background: none;
	}
`;

export const TextWrapper = styled.div`
	padding: 3rem 1.75rem;
	background: var(--silver);
	border-radius: 8px;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	h2 {
		margin: 0;
		font-size: 1.75rem 0 0;
		letter-spacing: 2px;
	}

	button {
		margin: 1.5rem 0 0;
		padding: 0.9rem 1.9rem;
		color: black;
		border: 1px solid black;

		&:hover {
			@media (min-width: 1366px) {
				color: white;
				background: black;
			}
		}
	}
`;
