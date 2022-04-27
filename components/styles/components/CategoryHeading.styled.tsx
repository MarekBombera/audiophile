import styled from 'styled-components';

export const CategoryHeadingStyled = styled.div`
	background: black;
	width: 100%;
	margin: 5.25rem 0 0;
	padding: 0.5rem 0 0.75rem;

	@media (min-width: 768px) {
		padding: 1.75rem 0 2rem;
	}

	@media (min-width: 1366px) {
		padding: 0.25rem;
	}

	h2 {
		text-transform: uppercase;
		text-align: center;
		font-size: 1.75rem;
		letter-spacing: 2px;
		color: white;

		@media (min-width: 768px) {
			font-size: 2.5rem;
			letter-spacing: 1.43px;
		}
	}
`;
