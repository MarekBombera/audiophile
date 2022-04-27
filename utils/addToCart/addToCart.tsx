import { dispatchNewItemToCart } from '../addNewItemToCart/addNewItemToCart';
import { addToTotal } from '../../state/slices/totalPriceSlice';

export const addToCart = (
	dispatch: Function,
	item: string,
	price: number,
	quantity: number
): void => {
	dispatchNewItemToCart(dispatch, item, quantity);
	dispatch(addToTotal(price * quantity));
};
