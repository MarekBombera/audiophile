import { updateShoppingCart } from '../../state/slices/shoppingCartSlice';
import { xx99mk2, xx99mk1, xx59, zx9, zx7, yx1 } from '../addToCart/inventory';

export const dispatchNewItemToCart = (
	dispatch: Function,
	item: string,
	quantity: number
): void => {
	switch (item) {
		case 'xx99 mkii':
			dispatch(updateShoppingCart(xx99mk2(quantity)));
			return;
		case 'xx99 mki':
			dispatch(updateShoppingCart(xx99mk1(quantity)));
			return;
		case 'xx59':
			dispatch(updateShoppingCart(xx59(quantity)));
			return;
		case 'zx9':
			dispatch(updateShoppingCart(zx9(quantity)));
			return;
		case 'zx7':
			dispatch(updateShoppingCart(zx7(quantity)));
			return;
		case 'yx1':
			dispatch(updateShoppingCart(yx1(quantity)));
			return;
		default:
			return;
	}
};
