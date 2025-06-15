import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Smart Pantry',
	description:
		'Plan meals, save money, and shop smarter! Get grocery lists and healthy meal ideas tailored to your budget, preferences, or what&apos;s already in your fridge.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<main>
					<Provider>{children}</Provider>
				</main>
			</body>
		</html>
	);
}
