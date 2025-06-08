'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, X, ChefHat } from 'lucide-react';
import type { IngredientsReducerReturn } from '@/features/managing-ingredients/hooks';
import { containerVariants, childVariants } from './animationVariants';

export const IngredientManager = ({ ingredients, dispatch }: IngredientsReducerReturn) => {
	const [newIngredient, setNewIngredient] = useState({
		name: '',
		quantity: '',
		unit: '',
	});

	const isEmpty = ingredients.length === 0;

	return (
		<motion.section
			variants={containerVariants}
			initial="hiddenDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.8 }}
		>
			<Card className="relative overflow-hidden group">
				<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<CardHeader className="relative">
					<motion.div variants={childVariants}>
						<CardTitle className="text-xl font-semibold  text-foreground flex items-center justify-between gap-2 flex-wrap	">
							<div className="flex gap-2">
								<motion.div
									animate={{ rotate: [0, 5, -5, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
								>
									🥕
								</motion.div>
								<span className="whitespace-nowrap">Available Ingredients</span>
							</div>
							<motion.div
								className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
								animate={{ scale: [1, 1.05, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								{ingredients.length} items
							</motion.div>
						</CardTitle>
					</motion.div>
				</CardHeader>
				<CardContent className="space-y-6 relative">
					<motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4" variants={childVariants}>
						<motion.div whileFocus={{ scale: 1.02 }} className="grid gap-2">
							<Label
								htmlFor="ingredient-name"
								className="text-sm font-medium text-muted-foreground"
							>
								Ingredient
							</Label>
							<motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
								<Input
									id="ingredient-name"
									placeholder="e.g., Tomatoes"
									value={newIngredient.name}
									onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
									className="bg-background/50 border-border/50 hover:border-primary/50 focus:border-primary transition-colors"
								/>
							</motion.div>
						</motion.div>

						<motion.div whileFocus={{ scale: 1.02 }} className="grid gap-2">
							<Label
								htmlFor="ingredient-quantity"
								className="text-sm font-medium text-muted-foreground"
							>
								Quantity
							</Label>
							<motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
								<Input
									id="ingredient-quantity"
									type="number"
									placeholder="e.g., 2"
									value={newIngredient.quantity}
									onChange={(e) =>
										setNewIngredient({
											...newIngredient,
											quantity: e.target.value,
										})
									}
									className="bg-background/50 border-border/50 hover:border-primary/50 focus:border-primary transition-colors"
								/>
							</motion.div>
						</motion.div>

						<motion.div whileFocus={{ scale: 1.02 }} className="grid gap-2">
							<Label
								htmlFor="ingredient-unit"
								className="text-sm font-medium text-muted-foreground"
							>
								Unit
							</Label>
							<motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
								<Input
									id="ingredient-unit"
									placeholder="e.g., cups, pieces"
									value={newIngredient.unit}
									onChange={(e) => setNewIngredient({ ...newIngredient, unit: e.target.value })}
									className="bg-background/50 border-border/50 hover:border-primary/50 focus:border-primary transition-colors"
								/>
							</motion.div>
						</motion.div>

						<div className="flex items-end">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full"
							>
								<Button
									onClick={() => {
										const { quantity, ...rest } = newIngredient;
										dispatch({
											type: 'ADD_INGREDIENT',
											payload: { id: String(Date.now()), quantity: Number(quantity), ...rest },
										});
										setNewIngredient({ name: '', quantity: '', unit: '' });
									}}
									className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-lg hover:shadow-green-500/25 transition-all duration-200"
									disabled={!newIngredient.name.trim() || !newIngredient.quantity}
								>
									<motion.div
										animate={{
											rotate:
												newIngredient.name.trim() && newIngredient.quantity ? [0, 180, 360] : 0,
										}}
										transition={{ duration: 0.3 }}
									>
										<Plus className="w-4 h-4 mr-1" />
									</motion.div>
									Add
								</Button>
							</motion.div>
						</div>
					</motion.div>
					<motion.div variants={childVariants}>
						<AnimatePresence>
							{!isEmpty && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
								>
									<h4 className="font-medium text-foreground flex items-center gap-2 mb-4">
										<ChefHat className="w-4 h-4 text-primary" />
										Your Ingredients:
									</h4>
									<div className="flex flex-wrap gap-2">
										{ingredients.map((ingredient) => (
											<div key={ingredient.id} className="group">
												<Badge
													variant="secondary"
													className="px-3 py-2 text-sm bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/20"
												>
													<span className="mr-2 font-medium">
														{ingredient.quantity} {ingredient.unit} {ingredient.name}
													</span>
													<motion.div
														whileHover={{ scale: 1.2, rotate: 90 }}
														whileTap={{ scale: 0.9 }}
													>
														<Button
															size="sm"
															variant="ghost"
															onClick={() => {
																dispatch({
																	type: 'REMOVE_INGREDIENT',
																	payload: {
																		id: ingredient.id,
																	},
																});
															}}
															className="h-4 w-4 p-0 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
														>
															<X className="w-3 h-3" />
														</Button>
													</motion.div>
												</Badge>
											</div>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
						{isEmpty && <EmptyState />}
					</motion.div>
				</CardContent>
			</Card>
		</motion.section>
	);
};

function EmptyState() {
	return (
		<motion.div
			className="text-center py-8 text-muted-foreground"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div>
				<motion.div
					animate={{ y: [0, -5, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="mb-4"
				>
					<ChefHat className="w-12 h-12 mx-auto text-muted-foreground/50" />
				</motion.div>
				<p className="text-lg font-medium mb-2">No ingredients added yet</p>
				<p className="text-sm">Add some ingredients to get personalized meal suggestions!</p>
			</div>
		</motion.div>
	);
}
