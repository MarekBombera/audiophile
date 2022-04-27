export const loadTotalPrice = () => {
	const value = localStorage.getItem('total');
	return value === null ? 0 : JSON.parse(value);
};
