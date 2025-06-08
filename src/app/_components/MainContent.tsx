'use client';

import { IngredientManager } from './IngredientManager';
import { CookingTechManager } from './CookingTechManager';
import { MealSuggestions } from './MealSuggestions';
import GenerateSuggestion from './GenerateSuggestion';
import { useIngredientsReducer } from '@/features/managing-ingredients/hooks';
import { useCookingTechReducer } from '@/features/managing-cooking-tech/hooks';
import { useDishSuggestions } from '@/features/dish-suggestions/hooks';

export default function MainContent() {
	const { ingredients, dispatch: ingredientsDispatch } = useIngredientsReducer();

	const { cookingTechnologies, dispatch: cookingTechDispatch } = useCookingTechReducer();

	const { mutate, dishSuggestions, isLoading } = useDishSuggestions();

	return (
		<div className="max-w-7xl mx-auto grid gap-10">
			<IngredientManager ingredients={ingredients} dispatch={ingredientsDispatch} />
			<CookingTechManager
				cookingTechnologies={cookingTechnologies}
				dispatch={cookingTechDispatch}
			/>
			<GenerateSuggestion
				ingredients={ingredients}
				cookingTechnologies={cookingTechnologies}
				mutate={mutate}
			/>
			<MealSuggestions isLoading={isLoading} suggestions={dishSuggestions ?? null} />
		</div>
	);
}
