export const childVariants = {
	hidden: { opacity: 0 },
	hiddenDown: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const containerVariants = {
	hidden: { opacity: 0 },
	hiddenDown: { opacity: 0, y: 50 },

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};
