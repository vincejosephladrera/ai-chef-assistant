const getDefaultTechnologies = () => {
	const defaultCookingTechnologies = [
		{ id: 'stovetop', name: 'Stovetop', icon: '🔥' },
		{ id: 'oven', name: 'Oven', icon: '🔲' },
		{ id: 'microwave', name: 'Microwave', icon: '📱' },
		{ id: 'grill', name: 'Grill', icon: '🔥' },
		{ id: 'air-fryer', name: 'Air Fryer', icon: '💨' },
		{ id: 'slow-cooker', name: 'Slow Cooker', icon: '🍲' },
		{ id: 'pressure-cooker', name: 'Pressure Cooker', icon: '⚡' },
		{ id: 'none', name: 'No Cooking Required', icon: '🥗' },
	];
	return defaultCookingTechnologies;
};

export { getDefaultTechnologies };
