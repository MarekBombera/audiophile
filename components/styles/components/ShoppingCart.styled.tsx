import styled from 'styled-components';

export const ShoppingCartStyled = styled.div`
	position: absolute;
	display: grid;
	top: 110%;
	right: 0;
	width: min(100%, 320px);
	padding: 1.75rem 1.5rem;
	gap: 1.5rem;
	background: white;
	border-radius: 8px;
	z-index: 100;

	@media (min-width: 768px) {
		top: 150%;
		width: 350px;
	}
	@media (min-width: 1366px) {
		top: 120%;
		right: 10.5%;
		width: 380px;
	}

	@media (min-width: 1920px) {
		right: 16.5%;
		width: 400px;
	}
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-between;

	h3 {
		margin: 0;
		font-size: 1.125rem;
		letter-spacing: 1.28571px;
	}

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-decoration-line: underline;
		opacity: 0.5;

		&:hover {
			cursor: pointer;
			color: var(--orange);
			opacity: 1;
		}
	}
`;

export const Total = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-transform: uppercase;
		opacity: 0.5;
	}

	h3 {
		margin: 0;
		font-size: 1.125rem;
	}
`;

export const CheckoutButton = styled.button`
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
}`;
