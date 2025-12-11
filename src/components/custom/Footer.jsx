const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-column">
                            <div className="footer-logo-wrapper">
                                <img src="./images/logo.png" alt="logo" />
                            </div>
                            <div className="contact-info">
                                <p className="contact-email">
                                    janoinc@company.com
                                </p>
                                <p className="contact-phone">+757 699-4478</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-column">
                            <p className="footer-col-title">Links</p>
                            <ul className="list-unstyled footer-nav">
                                <li>Home</li>
                                <li>Pricing</li>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Features</li>
                                <li>Demo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-column">
                            <p className="footer-col-title">Legal</p>
                            <ul className="list-unstyled footer-nav">
                                <li>Terms of Use</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-column">
                            <p className="footer-col-title">Products</p>
                            <ul className="list-unstyled footer-nav">
                                <li>Take the Tour</li>
                                <li>Live Chat</li>
                                <li>Self Service</li>
                                <li>Social</li>
                                <li>Collaboration</li>
                                <li>Jano Reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="shape-4 position-absolute"></div>
                <div className="shape-5 position-absolute"></div>
            </footer>
        </div>
    );
};

export default Footer;
