'use client';
import { childVariants, containerVariants } from './animationVariants';
import { motion } from 'framer-motion';

export default function HowItWorks() {
	return (
		<section className="mb-8 px-4 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<motion.div
					className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50 shadow-lg"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					<motion.h2
						className="text-3xl font-semibold text-foreground mb-8"
						variants={childVariants}
					>
						How it works
					</motion.h2>
					<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.li
							className="flex flex-col items-center group"
							variants={childVariants}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<span className="text-white font-bold text-xl">1</span>
							</motion.div>
							<h3 className="font-semibold text-foreground mb-2 text-lg">Add Ingredients</h3>
							<p className="text-center leading-relaxed text-muted-foreground">
								Tell us what ingredients you have available with quantities
							</p>
						</motion.li>

						<motion.li
							className="flex flex-col items-center group"
							variants={childVariants}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<span className="text-white font-bold text-xl">2</span>
							</motion.div>
							<h3 className="font-semibold text-foreground mb-2 text-lg">Select Equipment</h3>
							<p className="text-center leading-relaxed text-muted-foreground">
								Choose your available cooking technologies and methods
							</p>
						</motion.li>

						<motion.li
							className="flex flex-col items-center group"
							variants={childVariants}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<span className="text-white font-bold text-xl">3</span>
							</motion.div>
							<h3 className="font-semibold text-foreground mb-2 text-lg">Get AI Recipes</h3>
							<p className="text-center leading-relaxed text-muted-foreground">
								Receive personalized meal suggestions with detailed instructions
							</p>
						</motion.li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
}
