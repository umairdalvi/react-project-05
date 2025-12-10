const ReviewCard = ({ text, name, job }) => {
    return (
        <div className="review-card">
            <div className="review-text">
                <p>{text}</p>
            </div>
            <div className="text-center">
                <div className="reviewer-name">
                    <p>{name}</p>
                </div>
                <div className="reviewer-job">
                    <p>{job}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
