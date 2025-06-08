import HeroSection from './_components/HeroSection';
import HowItWorks from './_components/HowItWorks';
import MainContent from './_components/MainContent';

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
