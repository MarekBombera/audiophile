export const loadShoppingCart = () => {
	const value = localStorage.getItem('shoppingCart');
	return value === null ? [] : JSON.parse(value);
};
