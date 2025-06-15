import { NextRequest, NextResponse } from 'next/server';
import openai from '@/features/meal-suggestion/lib/openAIClient';
import createPrompt from '@/features/meal-suggestion/lib/createPrompt';
import { ingredientsStringConvert } from '@/features/meal-suggestion/lib/ingredientsStringConvert';

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

	const stringIngredients = ingredientsStringConvert(ingredients);

	const stringCookingTechnologies = cookingTechnologies.join(', ');

	const prompt = createPrompt({
		stringIngredients: stringIngredients,
		stringCookingTechnologies: stringCookingTechnologies,
	});

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
