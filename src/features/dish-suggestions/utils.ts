import { Ingredient } from '../managing-ingredients/types';

const generateDishSuggestion = async ({
	ingredients,
	cookingTechnologies,
}: {
	ingredients: Ingredient[];
	cookingTechnologies: string[];
}): Promise<{ result: string }> => {
	try {
		const response = await fetch('/api/generate-dish', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				ingredients: ingredients,
				cookingTechnologies: cookingTechnologies,
			}),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch dish suggestion');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error generating dish suggestion:', error);
		return { result: 'Default Dish Suggestion' };
	}
};

export { generateDishSuggestion };
