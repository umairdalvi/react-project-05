import Header from "./components/custom/Header";
import "./App.css";
import HeroSection from "./components/custom/HeroSection";
import SectionTwo from "./components/custom/SectionTwo";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <HeroSection />
            <SectionTwo />
        </div>
    );
};

export default App;
