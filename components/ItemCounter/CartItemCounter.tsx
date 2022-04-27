import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
	addToTotal,
	subtractFromTotal,
} from '../../state/slices/totalPriceSlice';
import {
	removeFromShoppingCart,
	updateQuantity,
} from '../../state/slices/shoppingCartSlice';

import {
	ItemCounterStyled,
	CounterButton,
} from '../styles/components/ItemCounter.styled';

type Props = {
	quantity: number;
	price: number;
	itemName: string;
};

export const CartItemCounter = ({
	quantity,
	price,
	itemName,
}: Props): JSX.Element => {
	const [counter, setCounter] = useState(quantity);
	const dispatch = useDispatch();

	const addNumber = (): void => {
		setCounter(counter + 1);
		dispatch(addToTotal(price));
		dispatch(updateQuantity([counter, itemName, '+']));
	};

	const subtractNumber = (): void => {
		if (counter === 1) {
			dispatch(removeFromShoppingCart(itemName));
			dispatch(subtractFromTotal(price));
			return;
		}
		setCounter(counter - 1);
		dispatch(subtractFromTotal(price));
		dispatch(updateQuantity([counter, itemName, '-']));
	};

	return (
		<ItemCounterStyled>
			<CounterButton onClick={subtractNumber}>-</CounterButton>
			<p>{counter}</p>
			<CounterButton onClick={addNumber}>+</CounterButton>
		</ItemCounterStyled>
	);
};
