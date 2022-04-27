import styled from 'styled-components';

export const NavigationStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0 2rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	z-index: 2;
`;

export const Logo = styled.div`
	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
			color: var(--orange);
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	gap: 3rem;
	margin-right: 1.5rem;

	a {
		text-align: center;
		font-size: 0.8125rem;
		letter-spacing: 2px;
		transition: color 0.2s ease-out;

		&:hover {
			@media (min-width: 1366px) {
				cursor: pointer;
				color: var(--orange);
			}
		}
	}
`;

export const Cart = styled.div`
	width: 23px;

	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
		}
	}
`;
