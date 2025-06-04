'use client';

import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { Ingredient } from '@/features/adding-of-ingredients/types';

export default function AddIngredientForm() {
	const [ingredients] = useState<Ingredient[] | []>([]);

	return (
		<>
			<label htmlFor="ingredients">Ingredients</label>
			<input id="ingredients" type="text" placeholder="e.g., Tomatoes" />
			<label htmlFor="quantity">Quantity</label>
			<input id="quantity" type="number" placeholder="e.g., 2" min="1" />
			<label htmlFor="unit">Unit</label>
			<input id="unit" type="text" placeholder="e.g., cups, pieces" />
			<button>
				<PlusIcon />
				<span>Add</span>
			</button>
			<IngredientsDisplay ingredients={ingredients} />
		</>
	);
}

function IngredientsDisplay({ ingredients }: { ingredients: Ingredient[] }) {
	if (ingredients.length === 0) {
		return (
			<div>
				<p>No ingredients added yet. Add some ingredients to get meal suggestions!</p>
			</div>
		);
	}

	return (
		<div>
			{ingredients.map((ingredient, index) => (
				<div key={index}>
					<h3>{ingredient.name}</h3>
					<p>
						<span>{ingredient.quantity}</span> <span>{ingredient.unit}</span>
					</p>
				</div>
			))}
		</div>
	);
}
