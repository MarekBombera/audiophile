export const addToCartAnimation = () => {
	const cart: any = document.querySelector('.cart-animation');
	if (cart?.classList.contains('cart-animation--active')) {
		return;
	}
	cart?.classList.add('cart-animation--active');
	setTimeout(() => {
		cart?.classList.remove('cart-animation--active');
	}, 750);
};
