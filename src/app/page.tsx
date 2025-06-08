import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
// import MainContent from './components/MainContent';

export default function Home() {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			{/* <div className="max-w-7xl mx-auto px-4 pb-16">
				<MainContent />
			</div> */}
		</>
	);
}
