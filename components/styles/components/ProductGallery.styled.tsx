import styled from 'styled-components';

export const ProductGalleryStyled = styled.div`
	display: grid;
	padding: 2rem 1.5rem;
	gap: 1.25rem;

	@media (min-width: 768px) {
		grid-template-columns: 0.695fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	@media (min-width: 1366px) {
		grid-template-columns: 0.615fr 1fr;
		align-content; center;
		grid-column: 1/-1;
		padding: 2rem 10rem;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 0.64fr 1fr;
		padding: 2rem 8rem 2rem 13rem;
	}

	@media (min-width: 1920px) {
		grid-template-columns: 0.59fr 1fr;
		padding: 2rem 17rem 2rem 24.5rem;
	}

	img {
		border-radius: 8px;
	}
`;

export const ImgWrapper_1 = styled.div`
	img {
		border-radius: 8px;
	}
	@media (min-width: 768px) {
		grid-colum: 1/1;
		grid-row: 1/1;
	}
`;

export const ImgWrapper_2 = styled.div`
	@media (min-width: 768px) {
		grid-colum: 1/1;
		grid-row: 2/2;
	}
`;

export const ImgWrapper_3 = styled.div`
	@media (min-width: 768px) {
		grid-colum: 2/-1;
		grid-row: 1/3;
	}
`;
