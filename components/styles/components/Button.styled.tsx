import styled from 'styled-components';

export const ButtonStyled = styled.button`
	display: grid;
	place-items: center;
	padding: 1rem 2rem;
	font-size: 0.8125rem;
	letter-spacing: 1px;
	color: white;
	background: var(--orange);
	}};
	outline: none;
	border: none;
	transition: all 0.2s ease-out;

	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
			background: var(--orange-hover);
		}
	}
`;
