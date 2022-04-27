import styled from 'styled-components';

export const CategoryListStyled: any = styled.div`
	display: flex;
	flex-direction: column;

	padding: ${({ mobileStyle }: any): any => {
		return mobileStyle === undefined ? '0' : '0 0 2rem';
	}};

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		margin: 2rem 0 0;
		padding: ${({ mobileStyle }: any): any => {
			return mobileStyle === undefined ? '0 2rem' : '4rem 2rem';
		}};
		gap: 1rem;
	}

	@media (min-width: 1366px) {
		padding: 0 15rem;
		gap: 2rem;
		grid-column: 1/-1;
	}

	@media (min-width: 1920px) {
		padding: 0 25rem;
	}
`;
