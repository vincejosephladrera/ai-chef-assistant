'use client';
import { ChefHatIcon } from 'lucide-react';

export default function AIMealSuggestionsDisplay() {
	return (
		<div>
			<ChefHatIcon />
			<p>No suggestions yet</p>
			<p>
				Add some ingredients and cooking technologies, then click &quot;Get Meal Suggestions&quot;
				to see what you can make!
			</p>
		</div>
	);
}
