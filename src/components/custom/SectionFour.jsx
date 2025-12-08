import FeatureCard from "./FeatureCard";

const SectionFour = () => {
    return (
        <div className="container my-5">
            <div className="section-4 p-3">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="row row-gap-4">
                    <div className="col-4">
                        <div className="section-4-text d-flex flex-column h-100 justify-content-center">
                            <div className="section-4-title">
                                <p>Discover all our features</p>
                            </div>
                            <div className="section-4-cta">
                                <a href="#">Click here for more info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <FeatureCard
                            imgUrl="./images/icon_13.svg"
                            featureName="File Sharing"
                            featureDsc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis reprehenderit asperiores, excepturi aperiam quae."
                        />
                    </div>
                    <div className="col-4">
                        <FeatureCard
                            imgUrl="./images/icon_14.svg"
                            featureName="Team Management"
                            featureDsc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis reprehenderit asperiores, excepturi aperiam quae."
                        />
                    </div>
                    <div className="col-4">
                        <FeatureCard
                            imgUrl="./images/icon_15.svg"
                            featureName="Time Tracking"
                            featureDsc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis reprehenderit asperiores, excepturi aperiam quae."
                        />
                    </div>
                    <div className="col-4">
                        <FeatureCard
                            imgUrl="./images/icon_16.svg"
                            featureName="Voice & Video Call"
                            featureDsc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis reprehenderit asperiores, excepturi aperiam quae."
                        />
                    </div>
                    <div className="col-4">
                        <FeatureCard
                            imgUrl="./images/icon_17.svg"
                            featureName="Cloud Storage"
                            featureDsc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis reprehenderit asperiores, excepturi aperiam quae."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
