import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { clearShoppingCart } from '../../state/slices/shoppingCartSlice';
import { resetTotal } from '../../state/slices/totalPriceSlice';

import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem';

import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';

import {
	ShoppingCartStyled,
	Head,
	Total,
	CheckoutButton,
} from '../styles/components/ShoppingCart.styled';
import { Overlay } from '../styles/components/Overlay.styled';

type CartMap = {
	itemName: string;
	price: string;
	img: string;
	quantity: number;
};

export const ShoppingCart = ({ toggleCart }: any): JSX.Element => {
	const {
		shoppingCart: { cart },
		totalPrice: { total },
	} = useSelector((state: any) => state);
	const dispatch = useDispatch();

	const renderCartItems = cart.map((item: CartMap) => {
		const { itemName, price, img, quantity } = item;
		return (
			<ShoppingCartItem
				key={price}
				itemName={itemName}
				price={+price}
				img={img}
				quantity={quantity}
			/>
		);
	});

	const clearCart = () => {
		dispatch(clearShoppingCart());
		dispatch(resetTotal());
	};

	const domNodeRef = useClickOutside(() => {
		toggleCart();
	});

	return (
		<>
			<Overlay />
			<ShoppingCartStyled ref={domNodeRef}>
				<Head>
					<h3>{`cart (${cart.length})`}</h3>
					<p onClick={clearCart}>Remove All</p>
				</Head>
				{renderCartItems}
				<Total>
					<p>Total</p>
					<h3>{`$ ${total}`}</h3>
				</Total>
				<Link href={cart.length === 0 ? '' : '/checkout'}>
					<CheckoutButton onClick={cart.length === 0 ? null : toggleCart}>
						Checkout
					</CheckoutButton>
				</Link>
			</ShoppingCartStyled>
		</>
	);
};
