'use client';

import { ArrowDown, Bot, Wand2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from './animationVariants';

export default function HeroSection() {
	return (
		<motion.section className="relative py-16 px-4">
			<motion.div
				className="max-w-4xl mx-auto text-center mb-10"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				<motion.div
					className="flex items-center justify-center gap-4 mb-6"
					variants={childVariants}
				>
					<motion.div
						animate={{
							rotate: [0, 10, -10, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatDelay: 5,
						}}
						className="relative"
					>
						<Bot className="w-16 h-16 text-primary" />
						<motion.div
							className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<Sparkles className="w-3 h-3 text-white" />
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.h1
					className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-green-500 bg-clip-text text-transparent"
					variants={childVariants}
				>
					AI Chef Assistant
				</motion.h1>
				<motion.p
					className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
					variants={childVariants}
				>
					Transform your available ingredients into
					<span className="text-primary font-semibold"> delicious meals </span>
					with the power of AI. Just tell me what you have, and I&apos;ll create the perfect recipe
					for you.
				</motion.p>
				<motion.div
					className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-12 flex-wrap"
					variants={childVariants}
				>
					<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary">
						<Wand2 className="w-4 h-4" />
						<span className="font-medium">AI Powered</span>
					</div>
					<span>•</span>
					<span>Personalized Recipes</span>
					<span>•</span>
					<span>Smart Suggestions</span>
				</motion.div>
				<motion.div variants={childVariants}>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="flex justify-center"
					>
						<ArrowDown className="w-6 h-6 text-muted-foreground" />
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
