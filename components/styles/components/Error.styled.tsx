import styled from 'styled-components';

export const ErrorStyled_p = styled.p`
	margin-top: 0;
	font-weight: bold;
	text-transform: capitalize;
	font-size: 0.75rem;
	letter-spacing: 0.015rem;
	color: red;

	@include media('>=desktop') {
		font-size: 0.8rem;
	}
`;
