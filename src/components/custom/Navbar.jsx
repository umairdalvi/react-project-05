const Navbar = () => {
    return (
        <nav>
            <ul className="navbar-nav d-flex flex-row gap-5">
                <li className="navigation-item">
                    <a href="#">
                        Home
                        <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="hover-menu">
                        <div className="menu-column">
                            <p className="menu-column-title">Business</p>
                            <ul className="menu d-flex flex-column gap-2 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">Insurance</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Web Hosting</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Education</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">N.P. Charity</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Real Estate</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-column">
                            <p className="menu-column-title">Landing</p>
                            <ul className="menu d-flex flex-column gap-2 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">Sass Product</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">App Landing</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Crypto</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Personal Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-column">
                            <p className="menu-column-title">Agency</p>
                            <ul className="menu d-flex flex-column gap-2 list-unstyled">
                                <li>
                                    <a href="#">Agency Modern</a>
                                </li>
                                <li>
                                    <a href="#">SEO and Digital Agency</a>
                                </li>
                                <li>
                                    <a href="#">Design Agency</a>
                                </li>
                                <li>
                                    <a href="#">Lead Generation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navigation-item">
                    <a href="#">
                        Pages
                        <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="hover-menu">
                        <div className="menu-column">
                            <ul className="menu d-flex flex-column gap-3 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Services</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Our Team</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Pricing</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Features</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Other Pages</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navigation-item">
                    <a href="#">
                        Portfolio
                        <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="hover-menu">
                        <div className="menu-column">
                            <ul className="menu d-flex flex-column gap-3 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">Portfolio 01</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 02</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 03</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 04</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 05</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 06</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio 07</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Portfolio Details</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navigation-item">
                    <a href="#">
                        Blog
                        <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="hover-menu">
                        <div className="menu-column">
                            <ul className="menu d-flex flex-column gap-3 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">Blog 01</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Blog 02</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Blog 03</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Blog 04</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navigation-item">
                    <a href="#">
                        Contact
                        <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <div className="hover-menu">
                        <div className="menu-column">
                            <ul className="menu d-flex flex-column gap-3 list-unstyled">
                                <li className="menu-item">
                                    <a href="#">Contact-Insurance</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Contact-Agency</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Contact-Web Hosting</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">Contact-L. Generation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
