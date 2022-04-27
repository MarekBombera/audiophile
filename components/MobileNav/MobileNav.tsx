import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductCategoryList } from '../ProductCategoryList/ProductCategoryList';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

import {
	MobileNavStyled,
	Menu,
	Logo,
	Cart,
	Wrapper,
} from '../styles/components/MobileNav.styled';

import burger_menu from '../../public/assets/shared/mobile/icon-hamburger.svg';
import logo from '../../public/assets/shared/desktop/logo.svg';
import icon_cart from '../../public/assets/shared/desktop/icon-cart.svg';

export const MobileNav = (): JSX.Element => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [openCart, setOpenCart] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setOpenMenu(!openMenu);
	};

	const toggleCart = (): void => {
		setOpenCart(!openCart);
	};

	const renderMenu = (
		<Wrapper>
			<ProductCategoryList />
		</Wrapper>
	);
	return (
		<MobileNavStyled>
			<Menu onClick={toggleMenu}>
				<Image src={burger_menu} alt="logo" />
			</Menu>
			<Logo>
				<Link href="/" passHref>
					<Image src={logo} alt="logo" />
				</Link>
			</Logo>
			<Cart onClick={toggleCart}>
				<Image src={icon_cart} alt="shopping cart" />
			</Cart>
			{!openCart ? null : <ShoppingCart toggleCart={toggleCart} />}
			{!openMenu ? null : renderMenu}
		</MobileNavStyled>
	);
};
