'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { generateDishSuggestion } from './utils';

const useDishSuggestions = () => {
	const [dishSuggestions, setDishSuggestions] = useState<string | null>(null);

	const mutation = useMutation({
		mutationFn: generateDishSuggestion,
		onSuccess: (data) => {
			setDishSuggestions(data.result);
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const { isPending } = mutation;

	return {
		dishSuggestions,
		isLoading: isPending,
		mutate: mutation.mutate,
	};
};

export { useDishSuggestions };
