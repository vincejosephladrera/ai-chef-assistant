import { useReducer } from 'react';
import type { Ingredient, IngredientsReducerActions } from './types';

const useIngredientsReducer = () => {
	const [ingredients, dispatch] = useReducer(ingredientsReducer, []);

	return { ingredients, dispatch };
};

const ingredientsReducer = (state: Ingredient[], action: IngredientsReducerActions) => {
	switch (action.type) {
		case 'ADD_INGREDIENT':
			if (state.find((i) => i.name === action.payload.name)) {
				return state;
			}
			return [...state, action.payload];
		case 'REMOVE_INGREDIENT':
			return state.filter((i) => i.id !== action.payload.id);
		default:
			return state;
	}
};

type IngredientsReducerReturn = ReturnType<typeof useIngredientsReducer>;

export type { IngredientsReducerReturn };
export { useIngredientsReducer };
