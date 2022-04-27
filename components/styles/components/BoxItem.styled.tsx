import styled from 'styled-components';

export const BoxItemStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	h5 {
		margin: 0;
		font-size: 0.9375rem;
		text-transform: lowercase;
		color: var(--orange);
		width: 1px;
		text-align: center;
	}

	p {
		margin: 0;
		font-size: 0.9375rem;
		opacity: 0.6;
	}
`;
