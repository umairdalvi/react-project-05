import RBSOffCanvas from "../react-bootstrap/RBSOffCanvas";
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
                <div className="header-buttons d-flex gap-2 align-items-center">
                    <Button className="button login-btn" text="Login" />
                    <Button
                        className="button contact-us-btn d-none d-xl-block"
                        text="Contact Us"
                    />
                    <RBSOffCanvas />
                </div>
            </div>
        </header>
    );
};

export default Header;
