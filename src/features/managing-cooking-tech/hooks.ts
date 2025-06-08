import { useReducer } from 'react';
import type { CookingTechReducerActions } from './types';

const useCookingTechReducer = () => {
	const [cookingTechnologies, dispatch] = useReducer(cookingTechReducer, []);

	return { cookingTechnologies, dispatch };
};

const cookingTechReducer = (state: string[], action: CookingTechReducerActions) => {
	switch (action.type) {
		case 'TOGGLE_COOKING_TECH':
			if (state.find((techID) => techID === action.payload)) {
				return state.filter((techID) => techID !== action.payload);
			} else {
				return [...state, action.payload];
			}
		default:
			return state;
	}
};

type CookingTechReducerReturn = ReturnType<typeof useCookingTechReducer>;

export type { CookingTechReducerReturn };
export { useCookingTechReducer };
