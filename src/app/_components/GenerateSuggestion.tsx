'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Ingredient } from '@/features/managing-ingredients/types';
import { containerVariants } from './animationVariants';
import { Sparkles } from 'lucide-react';

export default function GenerateSuggestion({
	ingredients,
	cookingTechnologies,
	mutate,
}: {
	ingredients: Ingredient[];
	cookingTechnologies: string[];
	mutate: (payload: { ingredients: Ingredient[]; cookingTechnologies: string[] }) => void;
}) {
	const cantGetSuggestions = ingredients.length === 0 || cookingTechnologies.length === 0;

	return (
		<motion.div
			className="text-center py-8"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 1 }}
		>
			<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
				<Button
					onClick={() =>
						mutate({ ingredients: ingredients, cookingTechnologies: cookingTechnologies })
					}
					disabled={cantGetSuggestions}
					size="lg"
					className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 hover:from-blue-700 hover:via-purple-700 hover:to-green-600 text-white px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<motion.div
						className="absolute inset-0 bg-white/20"
						initial={{ x: '-100%' }}
						whileHover={{ x: '100%' }}
						transition={{ duration: 0.5 }}
					/>
					<div className="relative z-10 flex items-center gap-3">
						<Sparkles className="w-6 h-6" />
						<span>Get AI Meal Suggestions</span>
					</div>
				</Button>
			</motion.div>

			{cantGetSuggestions && (
				<motion.p className="text-sm text-muted-foreground mt-4">
					Add at least one ingredient and one cooking technology to unlock AI suggestions
				</motion.p>
			)}
		</motion.div>
	);
}
