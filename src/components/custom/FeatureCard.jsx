const FeatureCard = ({ imgUrl, featureName, featureDsc }) => {
    return (
        <div className="feature-card">
            <div className="feature-img-wrapper">
                <img src={imgUrl} alt={featureName} className="feature-img" />
            </div>
            <div className="feature-name">
                <p>{featureName}</p>
            </div>
            <div className="feature-dsc">
                <p>{featureDsc}</p>
            </div>
            <div className="feature-cta">
                <a href="#">
                    <i className="ri-arrow-right-long-line"></i>
                </a>
            </div>
        </div>
    );
};

export default FeatureCard;
