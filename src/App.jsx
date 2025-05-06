import HeaderSection from "./components/Header";
import HeroSection from "./components/HeroSection";

import CompaniesLogo from "./components/CompaniesLogo";
import Design from "./components/Design";
import Temp from "./components/Temp";

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
            <Temp />
            <br />
            <br />
            <Line />
            {/* Line */}
            <br />
            <br />
            <HeaderSection />
            <HeroSection />
            <CompaniesLogo />
            {/* Line */}
            <br />
            <br />
            <Line />
            <br />
            <br />
            <Design />
        </>
    );
}
