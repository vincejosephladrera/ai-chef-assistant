interface Ingredient {
	id: string;
	name: string;
	quantity: number;
	unit: string;
}

type IngredientsReducerActions =
	| { type: 'ADD_INGREDIENT'; payload: Ingredient }
	| { type: 'REMOVE_INGREDIENT'; payload: { id: string } };

export type { Ingredient, IngredientsReducerActions };
