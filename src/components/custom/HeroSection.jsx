import Button from "./Button";

const HeroSection = () => {
    return (
        <div className="container">
            <div className="hero-section d-flex flex-column gap-5 align-items-center">
                <div className="text-center">
                    <h1 className="hero-title text-center">
                        <span className="word-deco">
                            Create
                            <img src="./images/shape_25.svg" alt="shape-25" />
                        </span>{" "}
                        your workspace & <br /> make life easier
                        <img
                            className="shape-26"
                            src="./images/shape_26.svg"
                            alt="shape-26"
                        />
                        <img
                            className="shape-27"
                            src="./images/shape_27.svg"
                            alt="shape-27"
                        />
                    </h1>
                    <p className="hero-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, sed.
                    </p>
                </div>
                <div className="hero-cta d-flex align-items-center gap-5">
                    <Button
                        className="try-now-btn hero-cta-btn button"
                        text="Try Free Now"
                    />

                    <button className="button d-flex play-btn align-items-center gap-3">
                        <p className="play-icon">
                            <i className="ri-play-large-fill"></i>
                        </p>
                        <p className="button d-flex flex-column">
                            <span className="play-btn-highlight">Watch</span>{" "}
                            Intro Video
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
