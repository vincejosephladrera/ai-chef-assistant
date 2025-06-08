import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import type { Ingredient } from '@/features/managing-ingredients/types';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
	const data = await req.json();

	const { ingredients, cookingTechnologies } = data;

	if (
		!ingredients ||
		!cookingTechnologies ||
		ingredients.length < 1 ||
		cookingTechnologies.length < 1
	) {
		throw new Error('Missing ingredients or technology in query.');
		return;
	}

	const stringIngredientsList = ingredients.reduce(
		(acc: string, ingredient: Ingredient, index: number) => {
			const ingredientStr = `${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}`;
			return index === 0 ? ingredientStr : `${acc}, ${ingredientStr}`;
		},
		'',
	);

	const stringCookingTech = cookingTechnologies.join(', ');

	const prompt = `You are a helpful cooking assistant. The user has the following ingredients: ${stringIngredientsList}, and wants to cook using ${stringCookingTech}. 
	Please suggest **three** practical recipes that use these ingredients and this cooking method, categorized by difficulty:
	- One easy recipe
	- One average recipe
	- One difficult recipe
	
	For each recipe, include:
	- Recipe name
	- Short description
	- Ingredients list
	- Step-by-step instructions
	
	Keep the tone friendly and beginner-friendly.`;

	try {
		const completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: prompt }],
			temperature: 0.7,
		});

		const message = completion.choices[0].message.content;
		return NextResponse.json({ result: message }, { status: 200 });
	} catch (error: unknown) {
		console.error('OpenAI API error:', error);
		return NextResponse.json({ error: 'OpenAI request failed.' }, { status: 500 });
	}
}
