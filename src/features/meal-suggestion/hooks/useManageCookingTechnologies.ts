'use client';

import { useReducer } from 'react';

const useManageCookingTechnologies = () => {
	const [cookingTechnologies, dispatch] = useReducer(cookingTechReducer, []);

	const toggleCookingTechnology = (id: string) => {
		dispatch({ type: 'TOGGLE_COOKING_TECH', payload: id });
	};

	return { cookingTechnologies, toggleCookingTechnology };
};

type CookingTechReducerActions = { type: 'TOGGLE_COOKING_TECH'; payload: string };

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

export { useManageCookingTechnologies };
