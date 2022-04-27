import { createGlobalStyle } from 'styled-components';
import { addToCart } from './keyframes.styled';

export const GlobalStyles = createGlobalStyle`
:root {
	--orange: rgba(216, 125, 74);
	--silver: rgba(241, 241, 241);
	--background: rgba(242,242,242);
  
	--orange-hover: rgba(251, 175, 133);
  
	// SVG
  
	--orange-svg: brightness(0) saturate(100%) invert(54%) sepia(84%) saturate(357%) hue-rotate(337deg) brightness(88%) contrast(92%);

	--addToCart-animation: ${addToCart} 0.75s 1 ease-out forwards;
}

.cart-animation--active {
	animation: var(--addToCart-animation);
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body,
#__next,
.App {
	height: 100%;
	margin: 0;
	scroll-behavior: smooth; 
}

a {
	font-family: Manrope;
	font-weight: 700;
	text-transform: uppercase;
	color: white;
	text-decoration: none;

}

p {
		font-family: Manrope;
		font-weight: 500;
}

h1,h2,h3,h4,h5 {
		font-family: Manrope;
		font-weight: 700;
		text-transform: uppercase;
}

button {
		font-family: Manrope;
		font-weight: 700;
		text-transform: uppercase;
}

.paymentField-wrapper {
	display: flex;
	align-items: center;
	width: 100%;
	height: 48px;
	margin: 0.5rem 0 0;
	padding-left: 1rem;
	gap: 0.5rem;
	border: 1px solid rgb(224, 228, 250);
	border-radius: 8px;

	@media (min-width: 1920px) {
		height: 50px;
	} 

	p {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.015rem;

		@media (min-width: 1920px) {
			font-size: 0.85rem;
		} 
	}
}



input {
	width: 100%;
	height: 48px;
	margin: 0.5rem 0;
	padding-left: 0.75rem;
	border: 1px solid rgb(224, 228, 250);
	border-radius: 8px;
	font-weight: 700;
	font-size: 0.75rem;
	letter-spacing: 0.015rem;

	&:focus {
		outline-color: var(--orange);
	}

	@media (min-width: 1920px) {
		font-size: 0.85rem;
		height: 50px;
	}
}

input[type='radio'] {
	width: auto;
	transform:scale(1.3);
	accent-color: var(--orange);
}


label {
	font-family: Manrope;
	text-transform: capitalize;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: -0.214286px;

	@media (min-width: 1920px) {
		font-size: 0.8rem;
	} 
}

form {
	background: white;
	padding: 1.5rem 2rem 1.75rem;
	border-radius: 8px;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 2rem 2rem 2.25rem;
		column-gap : 1.25rem;
	}

	@media (min-width: 1366px) {
		width: 730px;
	}



	h2 {
		margin: 0 0 0.5rem;
		font-size: 1.75rem;
		letter-spacing: 1px;

		@media (min-width: 768px) {
			font-size: 2rem;
			letter-spacing: 1.14286px;
		}
	}

	h4 {
		margin-top: 1.5rem;
		font-size: 0.8125rem;
		letter-spacing: 0.928571px;
		color: var(--orange);

		@media (min-width: 768px) {
			grid-column: 1/-1;
		}
		@media (min-width: 1920px) {
			font-size: 0.85rem;
		} 
	}
}
`;
