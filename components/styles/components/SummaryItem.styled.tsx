import styled from 'styled-components';

export const SummaryItemStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 0.9375rem;
		font-weight: 700;
		opacity: 0.5;
	}
`;

export const ImgWrapper = styled.div`
	width: 64px;

	@media (min-width: 1366px) {
		width: 70px;
	}

	@media (min-width: 1920px) {
		width: 80px;
	}
	img {
		border-radius: 8px;
	}
`;

export const ItemSummary = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 0.25rem;

	h4 {
		margin: 0;
		font-size: 0.9375rem;

		@media (min-width: 1920px) {
			font-size: 1rem;
		}
	}

	p {
		margin: 0 0 0.25rem;
		font-size: 0.875rem;
		font-weight: 700;

		opacity: 0.5;

		@media (min-width: 1920px) {
			font-size: 1rem;
		}
	}
`;
