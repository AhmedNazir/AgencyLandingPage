import HeaderSection from "./components/Header";
import HeroSection from "./components/HeroSection";
import CompaniesLogo from "./components/CompaniesLogo";
import ServiceSection from "./components/ServiceSection";
import MoreServiceSection from "./components/MoreServiceSection";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import TrialSection from "./components/TrialSection";
import FooterSection from "./components/FooterSection";

export default function App() {
    return (
        <>
            <HeaderSection />
            <HeroSection />
            <CompaniesLogo />
            <ServiceSection />
            <MoreServiceSection />
            <TestimonialSection />
            <PricingSection />
            <FaqSection />
            <TrialSection />
            <FooterSection />
        </>
    );
}
