import Header from "./components/custom/Header";
import "./App.css";
import HeroSection from "./components/custom/HeroSection";
import SectionTwo from "./components/custom/SectionTwo";
import SectionThree from "./components/custom/SectionThree";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <HeroSection />
            <SectionTwo />
            <SectionThree />
        </div>
    );
};

export default App;
