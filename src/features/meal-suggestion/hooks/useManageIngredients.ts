'use client';

import { useReducer } from 'react';
import { Ingredient } from '../types/ingredients';

const useManageIngredients = () => {
	const [ingredients, dispatch] = useReducer(ingredientsReducer, []);

	const addIngredient = (ingredient: Ingredient) => {
		dispatch({
			type: 'ADD_INGREDIENT',
			payload: ingredient,
		});
	};

	const removeIngredient = (id: string) => {
		dispatch({
			type: 'REMOVE_INGREDIENT',
			payload: { id },
		});
	};

	return { ingredients, addIngredient, removeIngredient };
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

type IngredientsReducerActions =
	| { type: 'ADD_INGREDIENT'; payload: Ingredient }
	| { type: 'REMOVE_INGREDIENT'; payload: { id: string } };

export { useManageIngredients };
