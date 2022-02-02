import { ActionType } from "../constants /actionTypes";

const initialState = [
	{
		products: [
			{
				id: 1,
				title: "Product 1",
			},
		],
	},
];

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionType.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
