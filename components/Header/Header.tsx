import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from '../../state/slices/shoppingCartSlice';
import { loadTotalFromLocalStorage } from '../../state/slices/totalPriceSlice';

import { MobileNav } from '../MobileNav/MobileNav';
import { Navigation } from '../Navigation/Navigation';

import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import { loadShoppingCart } from '../../utils/localStorage/loadShoppingCart';
import { loadTotalPrice } from '../../utils/localStorage/loadTotalPrice';

import { HeaderStyled } from '../styles/components/Header.styled';

export const Header = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (typeof localStorage === 'undefined') {
			dispatch(loadCartFromLocalStorage([]));
			dispatch(loadTotalFromLocalStorage(0));
			return;
		}
		dispatch(loadCartFromLocalStorage(loadShoppingCart()));
		dispatch(loadTotalFromLocalStorage(loadTotalPrice()));
	}, []);

	return (
		<HeaderStyled>
			{!useMediaQueryMatch('desktop') ? <MobileNav /> : <Navigation />}
		</HeaderStyled>
	);
};
