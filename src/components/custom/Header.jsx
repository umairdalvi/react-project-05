import Button from "./Button";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="container-fluid px-4 py-3 d-flex align-items-center justify-content-between">
            <div className="header-left">
                <div className="header-logo-wrapper">
                    <img src="./images/logo.png" alt="" />
                </div>
            </div>
            <Navbar />
            <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-buttons d-flex gap-2">
                    <Button className="button login-btn" text="Login" />
                    <Button
                        className="button contact-us-btn"
                        text="Contact Us"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
