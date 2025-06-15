import type { Ingredient } from '../types/ingredients';

const ingredientsStringConvert = (ingredients: Ingredient[]) => {
	const stringIngredients = ingredients.reduce(
		(acc: string, ingredient: Ingredient, index: number) => {
			const ingredientStr = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}`;
			return index === 0 ? ingredientStr : `${acc}, ${ingredientStr}`;
		},
		'',
	);

	return stringIngredients;
};

export { ingredientsStringConvert };
