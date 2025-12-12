import Button from "./Button";

const SectionThree = () => {
    return (
        <div className="container">
            <div className="section-three d-flex flex-column flex-lg-row">
                <div className="section-three-left">
                    <div className="section-three-text">
                        <div className="section-three-sub-heading">
                            <p>Integrates your tools</p>
                        </div>
                        <div className="section-three-title">
                            <p>Connect jano with the software you use.</p>
                        </div>
                        <div className="section-three-subtitle">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem, nostrum!
                            </p>
                        </div>
                    </div>
                    <div className="section-three-cta mt-5">
                        <Button
                            text="Learn More"
                            className="button learn-more-btn"
                        />
                    </div>
                </div>
                <div className="section-three-right w-100">
                    <div className="section-three-bg">
                        <div className="section-three-bg-img">
                            <img src="./images/Plogo-1.png" alt="plogo-1" />
                        </div>

                        <div className="plogo">
                            <img src="./images/Plogo-2.png" alt="plogo-2" />
                        </div>
                        <div className="plogo">
                            <img src="./images/Plogo-3.png" alt="plogo-3" />
                        </div>
                        <div className="plogo">
                            <img src="./images/Plogo-4.png" alt="plogo-4" />
                        </div>
                        <div className="plogo">
                            <img src="./images/Plogo-5.png" alt="plogo-5" />
                        </div>
                        <div className="plogo">
                            <img src="./images/Plogo-6.png" alt="plogo-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
