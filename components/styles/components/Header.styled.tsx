import styled from 'styled-components';

export const HeaderStyled = styled.header`
	display: grid;
	position: fixed;
	width: 100%;
	padding: 0;
	background: black;
	z-index: 9999999999999999999999;

	@media (min-width: 1366px) {
		padding: 2rem 15rem 0;
	}

	@media (min-width: 1920px) {
		padding: 2rem 25rem 0;
	}
`;
