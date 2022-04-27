import styled from 'styled-components';

export const FooterStyled = styled.footer`
	position: relative;
	display: grid;
	place-items: center;
	padding: 3rem 1.5rem 2rem;
	background: black;
	gap: 3rem;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		padding: 3.5rem 2rem 2.5rem;
	}

	@media (min-width: 1366px) {
		padding: 5rem 10rem 3rem;
	}

	@media (min-width: 1920px) {
		padding: 5rem 20rem 3rem;
	}
`;

export const Logo = styled.div`
	@media (min-width: 768px) {
		grid-column: 1/-1;
		justify-self: flex-start;
	}

	@media (min-width: 1366px) {
		grid-column: 1/ 1;
	}

	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
			color: var(--orange);
		}
	}
`;

export const Hr = styled.hr`
	position: absolute;
	top: 0;
	right: 50%;
	transform: translate(50%, 0);
	margin: 0;
	width: 100px;
	border: none;
	height: 4px;
	background: var(--orange);

	@media (min-width: 768px) {
		left: 2rem;
		transform: none;
	}

	@media (min-width: 1366px) {
		left: 10rem;
	}

	@media (min-width: 1920px) {
		left: 20rem;
	}
`;

export const FooterNav = styled.nav`
	display: grid;
	gap: 1rem;

	@media (min-width: 768px) {
		display: flex;
		grid-column: 1/-1;
		justify-self: flex-start;
	}

	@media (min-width: 1366px) {
		grid-column: 2/ 2;
		justify-self: flex-end;
	}

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

export const About = styled.div`
	@media (min-width: 768px) {
		grid-column: 1/-1;
	}

	@media (min-width: 768px) {
		grid-column: 2/ 2;
		justify-self: flex-end;
	}

	@media (min-width: 1366px) {
		grid-column: 1/1;
	}

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-align: center;
		color: white;
		opacity: 0.5;
		line-height: 25px;

		@media (min-width: 768px) {
			text-align: start;
			padding: 0 1rem 0 0;
		}
	}
`;

export const Copyright = styled.div`
	@media (min-width: 768px) {
		justify-self: flex-start;
	}
	@media (min-width: 1366px) {
		grid-column: 1/1;
		grid-row: 3/3;
	}

	p {
		margin: 0;
		font-size: 0.9375rem;
		text-align: center;
		color: white;
		opacity: 0.5;
		line-height: 25px;

		@media (min-width: 768px) {
			text-align: start;
		}
	}
`;

export const Social = styled.div`
	display: flex;
	gap: 1rem;

	@media (min-width: 768px) {
		justify-self: flex-end;
	}

	@media (min-width: 1366px) {
		align-self: flex-end;
	}

	& > * {
	}

	img {
		&:hover {
			@media (min-width: 1366px) {
				cursor: pointer;
				filter: var(--orange-svg);
			}
		}
	}
`;
