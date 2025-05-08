import HeaderSection from "./components/Header";
import HeroSection from "./components/HeroSection";

import CompaniesLogo from "./components/CompaniesLogo";
import Design from "./components/Design";
import ServiceSection from "./components/ServiceSection";
import MoreServiceSection from "./components/MoreServiceSection";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import TrialSection from "./components/TrialSection";
import FooterSection from "./components/FooterSection";

function Line() {
    return (
        <div
            style={{
                width: "100%",
                height: "10px",
                backgroundColor: "black",
                margin: "10px"
            }}
        ></div>
    );
}

export default function App() {
    return (
        <>
            {/* <br /> */}
            {/* <br /> */}
            {/* <Line /> */}
            {/* Line */}
            {/* <br /> */}
            {/* <br /> */}
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

            {/* Line */}
            {/* <br /> */}
            {/* <br /> */}
            {/* <Line /> */}
            {/* <br /> */}
            {/* <br /> */}
            {/* <Design /> */}
        </>
    );
}
