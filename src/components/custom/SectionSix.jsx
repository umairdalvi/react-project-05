import Button from "./Button";
import { useState } from "react";

const SectionSix = () => {
    const [active, setActive] = useState("A");

    return (
        <div className="container">
            <div className="section-6 d-flex flex-column align-items-center p-3">
                <div className="section-6-text">
                    <div className="section-6-sub-heading text-center">
                        <p className="text-uppercase">Pricing Plans</p>
                    </div>
                    <div className="section-6-title text-center">
                        <p>
                            No Hidden Charges <br />
                            Choose Your Plan
                        </p>
                    </div>
                </div>
                <div className="price-switch d-flex">
                    <button
                        className={`${
                            active === "A" ? "switch-active" : ""
                        } button price-switch-btn`}
                        onClick={() => setActive("A")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`${
                            active === "B" ? "switch-active" : ""
                        } button price-switch-btn`}
                        onClick={() => setActive("B")}
                    >
                        Yearly
                    </button>
                </div>
                <div className="row w-100">
                    <div className="col-lg-3 p-0">
                        <ul className="list-unstyled pr-list-wrapper">
                            <li className="pr-list-item">
                                <p>Full Access Library</p>
                            </li>
                            <li className="pr-list-item">
                                <p>Multiple Users</p>
                            </li>
                            <li className="pr-list-item">
                                <p>Refund</p>
                            </li>
                            <li className="pr-list-item">
                                <p>24/7 Support</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 pr-table-wrapper">
                        <div className="row">
                            <div className="col-md-4 p-0">
                                <div className="pr-column">
                                    <div className="pr-header">
                                        <div className="plan">
                                            <p>Silver Plan</p>
                                        </div>
                                        <div className="price">
                                            <p>
                                                ${active === "A" ? "17" : "117"}
                                            </p>
                                        </div>
                                        <div className="info">
                                            <p>Suitable for Individuals</p>
                                        </div>
                                    </div>
                                    <div className="pr-body">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="ri-close-large-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-close-large-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-close-large-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pr-footer">
                                        <Button
                                            text="Sign Up"
                                            className="button btn-signup"
                                        />
                                        <p className="trial-text">
                                            Get your 30-Day free trial
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="pr-column">
                                    <div className="pr-header">
                                        <div className="plan">
                                            <p>Gold Plan</p>
                                        </div>
                                        <div className="price">
                                            <p>
                                                ${active === "A" ? "25" : "125"}
                                            </p>
                                        </div>
                                        <div className="info">
                                            <p>Suitable for Startups</p>
                                        </div>
                                    </div>
                                    <div className="pr-body">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="ri-close-large-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-close-large-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pr-footer">
                                        <Button
                                            text="Sign Up"
                                            className="button btn-signup"
                                        />
                                        <p className="trial-text">
                                            Get your 30-Day free trial
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="pr-column">
                                    <div className="pr-header">
                                        <div className="plan">
                                            <p>Business Plan</p>
                                        </div>
                                        <div className="price">
                                            <p>
                                                ${active === "A" ? "35" : "135"}
                                            </p>
                                        </div>
                                        <div className="info">
                                            <p>Suitable for Large Businesses</p>
                                        </div>
                                    </div>
                                    <div className="pr-body">
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-check-line"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pr-footer">
                                        <Button
                                            text="Sign Up"
                                            className="button btn-signup"
                                        />
                                        <p className="trial-text">
                                            Get your 30-Day free trial
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-3"></div>
                <img src="./images/shape_40.svg" alt="shape_40" />
                <img src="./images/shape_41.svg" alt="shape_41" />
            </div>
        </div>
    );
};

export default SectionSix;
