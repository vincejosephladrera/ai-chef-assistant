const createPrompt = ({
	stringIngredients,
	stringCookingTechnologies,
}: {
	stringIngredients: string;
	stringCookingTechnologies: string;
}) => {
	const prompt = `You are a helpful cooking assistant. The user has the following ingredients: ${stringIngredients}, and wants to cook using ${stringCookingTechnologies}. 
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

	return prompt;
};

export default createPrompt;
