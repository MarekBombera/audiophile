import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '../slices/shoppingCartSlice';
import totalPriceReducer from '../slices/totalPriceSlice';

export const store = configureStore({
	reducer: {
		shoppingCart: shoppingCartReducer,
		totalPrice: totalPriceReducer,
	},
});
