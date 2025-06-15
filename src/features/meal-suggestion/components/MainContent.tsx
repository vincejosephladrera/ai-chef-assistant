'use client';

import { IngredientManager } from './IngredientManager';
import { CookingTechManager } from './CookingTechManager';
import { MealSuggestions } from './MealSuggestions';
import GenerateSuggestion from './GenerateSuggestion';
import { useManageIngredients } from '@/features/meal-suggestion/hooks/useManageIngredients';
import { useManageCookingTechnologies } from '@/features/meal-suggestion/hooks/useManageCookingTechnologies';
import { useDishSuggestions } from '@/features/meal-suggestion/hooks/useDishSuggestion';

export default function MainContent() {
	const { ingredients, addIngredient, removeIngredient } = useManageIngredients();

	const { cookingTechnologies, toggleCookingTechnology } = useManageCookingTechnologies();

	const { mutate, dishSuggestions, isLoading } = useDishSuggestions();

	return (
		<div className="max-w-7xl mx-auto grid gap-10">
			<IngredientManager
				ingredients={ingredients}
				addIngredient={addIngredient}
				removeIngredient={removeIngredient}
			/>
			<CookingTechManager
				cookingTechnologies={cookingTechnologies}
				toggleCookingTechnology={toggleCookingTechnology}
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
