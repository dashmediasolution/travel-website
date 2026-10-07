import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import TrustInformation from "./_components/TrustInformation";
import ServicesSection from "./_components/ServiceSection";
import HowItWorks from "./_components/HowItWorks";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <HeroSection />

            <TrustInformation />

            <ServicesSection/>

            <HowItWorks/>

            <CTASection/>

            <Footer/>
        </main>
    );
}