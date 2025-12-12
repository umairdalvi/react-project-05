const Button = ({ className, text, handleClick = null }) => (
    <button className={className} onClick={handleClick}>
        <span className="button-text">{text}</span>
    </button>
);

export default Button;
