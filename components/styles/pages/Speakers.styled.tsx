import styled from 'styled-components';

export const SpeakersStyled = styled.div`
	display: grid;
	gap: 4rem;

	@media (min-width: 768px) {
		gap: 6rem;
	}

	@media (min-width: 1366px) {
		gap: 0rem;
	}
`;
