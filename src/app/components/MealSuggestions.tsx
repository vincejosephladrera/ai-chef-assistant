'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';
import { childVariants, containerVariants } from './animationVariants';

export const MealSuggestions = ({
	suggestions,
	isLoading,
}: {
	suggestions: string | null;
	isLoading: boolean;
}) => {
	const isEmpty = suggestions === null;

	return (
		<motion.div
			variants={containerVariants}
			initial="hiddenDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.8 }}
		>
			<Card className="relative overflow-hidden group">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 via-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<CardHeader className="relative">
					<motion.div variants={childVariants}>
						<CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
							🤖 AI Meal Suggestions
						</CardTitle>
					</motion.div>
				</CardHeader>
				<motion.div variants={childVariants}>
					{isLoading ? (
						<LoadingState />
					) : isEmpty ? (
						<EmptyState />
					) : (
						<CardContent>
							<pre className="whitespace-pre-wrap">{suggestions}</pre>
						</CardContent>
					)}
				</motion.div>
			</Card>
		</motion.div>
	);
};

function LoadingState() {
	return (
		<CardContent className="relative">
			<motion.div
				className="flex items-center justify-center py-16"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<div className="text-center">
					<motion.div className="relative mx-auto mb-6" style={{ width: 64, height: 64 }}>
						<motion.div
							className="absolute inset-0 border-4 border-primary/20 rounded-full"
							animate={{ rotate: 360 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								ease: 'linear',
							}}
						/>
						<motion.div
							className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
							animate={{ rotate: 360 }}
							transition={{
								duration: 0.8,
								repeat: Infinity,
								ease: 'linear',
							}}
						/>
						<motion.div
							className="absolute inset-3 bg-primary/10 rounded-full flex items-center justify-center"
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						>
							<ChefHat className="w-6 h-6 text-primary" />
						</motion.div>
					</motion.div>

					<motion.h3
						className="text-xl font-semibold text-foreground mb-2"
						animate={{ opacity: [0.7, 1, 0.7] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						AI is crafting your perfect meals...
					</motion.h3>

					<motion.p
						className="text-muted-foreground mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						Analyzing your ingredients and cooking preferences
					</motion.p>

					<motion.div
						className="flex justify-center gap-1"
						variants={{
							animate: {
								transition: {
									staggerChildren: 0.1,
									repeat: Infinity,
									repeatType: 'reverse',
									duration: 1,
								},
							},
						}}
						animate="animate"
					>
						{[...Array(3)].map((_, i) => (
							<motion.div
								key={i}
								className="w-2 h-2 bg-primary rounded-full"
								variants={{
									animate: {
										scale: [1, 1.5, 1],
										opacity: [0.5, 1, 0.5],
									},
								}}
							/>
						))}
					</motion.div>
				</div>
			</motion.div>
		</CardContent>
	);
}

function EmptyState() {
	return (
		<CardContent className="relative">
			<div className="text-center py-16 text-muted-foreground">
				<motion.div
					animate={{ y: [0, -10, 0] }}
					transition={{ duration: 3, repeat: Infinity }}
					className="mb-6"
				>
					<ChefHat className="w-16 h-16 mx-auto text-muted-foreground/50" />
				</motion.div>
				<motion.h3
					className="text-xl font-semibold mb-3 text-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					Ready to cook something amazing?
				</motion.h3>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
					Add some ingredients and cooking technologies, then click &quot;Get Meal Suggestions&quot;
					to discover delicious recipes!
				</motion.p>
			</div>
		</CardContent>
	);
}
