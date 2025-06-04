import AddIngredientForm from './AddIngredientForm';
import HowItWorksSection from './HowItWorksSection';
import AIMealSuggestionsDisplay from './AIMealSuggestionsDisplay';

export default function Home() {
	return (
		<>
			<h1>AI Chef Assistant</h1>
			<p>
				Tell me what ingredients you have and what cooking equipment is available, and I'll suggest
				delicious meals you can make right now!
			</p>
			<div>
				<HowItWorksSection />
				<section>
					<h2>Available Ingredients</h2>
					<AddIngredientForm />
				</section>
				<section>
					<h2>Available Cooking Technologies</h2>
				</section>
				<button>Get Meal Suggestions</button>
				<p>Add at least one ingredient to get suggestions</p>
				<section>
					<h2>AI Meal Suggestions</h2>
					<AIMealSuggestionsDisplay />
				</section>
			</div>
		</>
	);
}
