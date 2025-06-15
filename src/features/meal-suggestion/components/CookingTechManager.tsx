'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { getDefaultTechnologies } from '@/features/meal-suggestion/api/getDefaultTechnologies';
import { Utensils, Zap } from 'lucide-react';
import { childVariants, containerVariants } from './animationVariants';

type CookingTechManagerProps = {
	cookingTechnologies: string[];
	toggleCookingTechnology: (id: string) => void;
};

export const CookingTechManager = ({
	cookingTechnologies,
	toggleCookingTechnology,
}: CookingTechManagerProps) => {
	const numberOfCookingTechnologies = cookingTechnologies.length;

	const isNotEmpty = cookingTechnologies && numberOfCookingTechnologies !== 0;

	const defaultCookingTechnologies = getDefaultTechnologies();

	return (
		<motion.section
			variants={containerVariants}
			initial="hiddenDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.8 }}
		>
			<Card className="relative overflow-hidden group">
				<div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<CardHeader className="relative">
					<motion.div variants={childVariants}>
						<CardTitle className="text-xl font-semibold text-foreground flex justify-between gap-2 flex-wrap">
							<div className="flex gap-2 items-center">
								<motion.div
									animate={{ rotate: [0, 10, -10, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
								>
									🍳
								</motion.div>
								<span className="whitespace-nowrap">Cooking Technologies</span>
							</div>

							<motion.div
								className="flex items-center gap-2 px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-medium"
								animate={{ scale: [1, 1.05, 1] }}
								transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
							>
								<Zap className="w-3 h-3" />
								{numberOfCookingTechnologies} selected
							</motion.div>
						</CardTitle>
					</motion.div>
				</CardHeader>
				<CardContent className="relative">
					<motion.div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4" variants={childVariants}>
						{defaultCookingTechnologies.map((tech) => (
							<motion.label
								key={tech.id}
								htmlFor={tech.id}
								className={`relative overflow-hidden flex gap-2 items-center p-4 rounded-lg border transition-all duration-300 cursor-pointer group/item ${
									cookingTechnologies.includes(tech.id)
										? 'border-primary bg-primary/10 shadow-lg shadow-primary/20 dark:bg-primary/20'
										: 'border-border hover:border-primary/50 bg-card hover:bg-accent/50'
								}`}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
								<Checkbox
									id={tech.id}
									checked={cookingTechnologies.includes(tech.id)}
									onCheckedChange={() => toggleCookingTechnology(tech.id)}
									className="data-[state=checked]:bg-primary data-[state=checked]:border-primary shadow-sm"
								/>
								<div className="flex-1 cursor-pointer flex items-center gap-2 text-sm font-medium relative z-10">
									<motion.span
										className="text-lg"
										animate={
											cookingTechnologies.includes(tech.id)
												? {
														rotate: [0, 10, -10, 0],
														scale: [1, 1.2, 1],
												  }
												: {}
										}
										transition={{ duration: 0.5 }}
									>
										{tech.icon}
									</motion.span>
									<span className="text-foreground group-hover/item:text-primary transition-colors">
										{tech.name}
									</span>
								</div>
								{cookingTechnologies.includes(tech.id) && (
									<motion.div
										className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
										transition={{ duration: 0.2 }}
									/>
								)}
							</motion.label>
						))}
					</motion.div>
					<motion.div variants={childVariants}>
						<AnimatePresence>
							{isNotEmpty && (
								<DisplaySelectedTechnology selectedTechnologies={cookingTechnologies} />
							)}
						</AnimatePresence>
						{!isNotEmpty && <EmptyState />}
					</motion.div>
				</CardContent>
			</Card>
		</motion.section>
	);
};

function DisplaySelectedTechnology({ selectedTechnologies }: { selectedTechnologies: string[] }) {
	return (
		<motion.div
			className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800"
			initial={{ opacity: 0, y: 10, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 10, scale: 0.95 }}
			transition={{ duration: 0.3 }}
		>
			<motion.p
				className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2"
				animate={{ scale: [1, 1.02, 1] }}
				transition={{ duration: 0.5 }}
			>
				<motion.span
					animate={{ rotate: 360 }}
					transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
				>
					<Zap className="w-4 h-4" />
				</motion.span>
				<strong>{selectedTechnologies.length}</strong> cooking method
				{selectedTechnologies.length > 1 ? 's' : ''} selected
			</motion.p>
		</motion.div>
	);
}

function EmptyState() {
	return (
		<motion.div
			className="text-center py-8 text-muted-foreground"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div
				animate={{ rotate: [0, 5, -5, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
				className="mb-4"
			>
				<Utensils className="w-12 h-12 mx-auto text-muted-foreground/50" />
			</motion.div>
			<motion.p
				animate={{ opacity: [0.5, 1, 0.5] }}
				transition={{ duration: 2, repeat: Infinity }}
				className="text-lg font-medium mb-2"
			>
				Select your cooking equipment
			</motion.p>
			<p className="text-sm">Choose the cooking methods you have available</p>
		</motion.div>
	);
}
