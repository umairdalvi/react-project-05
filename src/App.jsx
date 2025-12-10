import Header from "./components/custom/Header";
import "./App.css";
import HeroSection from "./components/custom/HeroSection";
import SectionTwo from "./components/custom/SectionTwo";
import SectionThree from "./components/custom/SectionThree";
import SectionFour from "./components/custom/SectionFour";
import SectionSix from "./components/custom/SectionSix";
import SectionFive from "./components/custom/SectionFive";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <HeroSection />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    );
};

export default App;
