import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

import {
	NavigationStyled,
	Logo,
	Nav,
	Cart,
} from '../styles/components/Navigation.styled';

import logo from '../../public/assets/shared/desktop/logo.svg';
import icon_cart from '../../public/assets/shared/desktop/icon-cart.svg';

export const Navigation = (): JSX.Element => {
	const [openCart, setOpenCart] = useState<boolean>(false);

	const toggleCart = (): void => {
		setOpenCart(!openCart);
	};

	return (
		<NavigationStyled>
			<Logo>
				<Link href="/" passHref>
					<Image src={logo} alt="logo" />
				</Link>
			</Logo>
			<Nav>
				<Link href="/">
					<a>home</a>
				</Link>
				<Link href="/headphones">
					<a>headphones</a>
				</Link>
				<Link href="/speakers">
					<a>speakers</a>
				</Link>
				<Link href="/earphones">
					<a>earphones</a>
				</Link>
			</Nav>
			<Cart onClick={toggleCart}>
				<Image src={icon_cart} alt="shopping cart" />
			</Cart>
			{!openCart ? null : <ShoppingCart toggleCart={toggleCart} />}
		</NavigationStyled>
	);
};
