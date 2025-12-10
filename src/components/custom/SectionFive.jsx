import SimpleSlider from "../slick-slider/SimpleSlider";

const SectionFive = () => {
    return (
        <div className="container">
            <div className="section-5">
                <div className="section-5-bg">
                    <div className="quote-icon">
                        <img src="./images/icon_19.svg" alt="icon-19" />
                    </div>
                    <div className="section-5-title">
                        <p>
                            See what our clients <br /> say about us
                        </p>
                    </div>
                    <SimpleSlider />
                    <img
                        className="position-absolute"
                        src="./images/img_07.jpg"
                        alt="img-07"
                    />
                    <img
                        className="position-absolute"
                        src="./images/img_08.jpg"
                        alt="img-08"
                    />
                    <img
                        className="position-absolute"
                        src="./images/img_09.jpg"
                        alt="img-09"
                    />
                    <img
                        className="position-absolute"
                        src="./images/img_10.jpg"
                        alt="img-10"
                    />
                    <img
                        className="position-absolute"
                        src="./images/img_11.jpg"
                        alt="img-11"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionFive;
