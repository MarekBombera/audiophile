export const addToCartAnimation = () => {
	const cart = document.querySelector('.kPypCb');
	cart?.classList.add('kPypCb--active');
	setTimeout(() => {
		cart?.classList.remove('kPypCb--active');
	}, 800);
};
