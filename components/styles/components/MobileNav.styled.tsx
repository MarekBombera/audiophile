import styled from 'styled-components';

export const MobileNavStyled = styled.nav`
	position: relative;
	display: grid;
	grid-template-columns: 20px 1fr 20px;
	align-items: center;
	padding: 1.75rem 1.5rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	z-index: 9;

	@media (min-width: 768px) {
		padding: 2rem;
	}
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: white;
	z-index: 2;
`;

export const Menu = styled.div``;

export const Logo = styled.div`
	justify-self: center;

	@media (min-width: 768px) {
		justify-self: flex-start;
		margin: 0 0 0 2rem;
	}
`;

export const Cart = styled.div`
	@media (min-width: 768px) {
		width: 23px;
	}
`;
