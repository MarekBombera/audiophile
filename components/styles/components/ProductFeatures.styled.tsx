import styled from 'styled-components';

export const ProductFeaturesStyled = styled.div`
	padding: 0rem 1.5rem;

	@media (min-width: 768px) {
		padding: 0 2rem;
	}

	@media (min-width: 1366px) {
		display: grid;
		padding: 0 0 0 15rem;
	}

	@media (min-width: 1920px) {
		padding: 0 0 0 25rem;
	}

	h2 {
		@media (min-width: 1366px) {
			margin-top: 0;
		}
	}

	p {
		font-size: 0.9375rem;
		line-height: 25px;
		opacity: 0.6;
	}
`;

export const Content = styled.div``;
