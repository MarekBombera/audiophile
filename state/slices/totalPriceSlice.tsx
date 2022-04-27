import { createSlice } from '@reduxjs/toolkit';

interface TotalPriceState {
	total: number;
}

const initialState: TotalPriceState = {
	total: 0,
};

export const totalPriceSlice = createSlice({
	name: 'totalPriceSlice',
	initialState,
	reducers: {
		addToTotal: (state, action) => {
			state.total = state.total + action.payload;
			localStorage.setItem('total', JSON.stringify(state.total));
		},
		subtractFromTotal: (state, action) => {
			state.total = state.total - action.payload;
			localStorage.setItem('total', JSON.stringify(state.total));
		},
		resetTotal: (state) => {
			state.total = 0;
			localStorage.setItem('total', JSON.stringify(state.total));
		},
		loadTotalFromLocalStorage: (state, action) => {
			state.total = action.payload;
		},
	},
});

export const {
	addToTotal,
	subtractFromTotal,
	resetTotal,
	loadTotalFromLocalStorage,
} = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
