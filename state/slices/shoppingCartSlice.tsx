import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartState {
	cart: {
		id: number;
		itemName: string;
		price: string;
		quantity: number;
	}[];
}

const initialState: ShoppingCartState = {
	cart: [],
};

export const shoppingCartSlice = createSlice({
	name: 'shoppingCartSlice',
	initialState,
	reducers: {
		updateShoppingCart: (state, action) => {
			state.cart.push(action.payload);
			localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
		},
		clearShoppingCart: (state) => {
			state.cart = [];
			localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
		},
		removeFromShoppingCart: (state, action) => {
			const arr: any = [];
			state.cart.filter((item) => {
				if (item.itemName !== action.payload) {
					arr.push(item);
				}
			});
			state.cart = arr;
			localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
		},
		updateQuantity: (state, action) => {
			for (let i in state.cart) {
				if (state.cart[i].itemName === action.payload[1]) {
					if (action.payload[2] === '+') {
						state.cart[i].quantity = action.payload[0] + 1;
						localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
					}
					if (action.payload[2] === '-') {
						state.cart[i].quantity = action.payload[0] - 1;
						localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
					}
				}
			}
		},
		updateQuantityProductDetail: (state, action) => {
			for (let i in state.cart) {
				if (state.cart[i].itemName === action.payload[1]) {
					state.cart[i].quantity = state.cart[i].quantity + action.payload[0];
					localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
				}
			}
		},
		loadCartFromLocalStorage: (state, action) => {
			state.cart = action.payload;
		},
	},
});

export const {
	updateShoppingCart,
	clearShoppingCart,
	removeFromShoppingCart,
	loadCartFromLocalStorage,
	updateQuantity,
	updateQuantityProductDetail,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
