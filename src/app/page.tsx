import HeroSection from '../features/meal-suggestion/components/HeroSection';
import HowItWorks from '../features/meal-suggestion/components/HowItWorks';
import MainContent from '../features/meal-suggestion/components/MainContent';

export default function Home() {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			<div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
				<MainContent />
			</div>
		</>
	);
}
