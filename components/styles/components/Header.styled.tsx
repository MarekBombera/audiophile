import styled from 'styled-components';

export const HeaderStyled = styled.header`
	display: grid;
	position: absolute;
	width: 100%;
	padding: 1.75rem 1.5rem 0;
	background: black;
	z-index: 1;

	@media (min-width: 1366px) {
		padding: 2.5rem 10rem 0;
	}

	@media (min-width: 1920px) {
		padding: 2.5rem 20rem 0;
	}
`;
