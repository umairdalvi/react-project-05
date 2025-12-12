import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Button from "../custom/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function RBSOffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className="menu-btn button d-xl-none"
                text={<i className="ri-menu-line"></i>}
                handleClick={handleShow}
            />

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled d-flex flex-column gap-4 fw-semibold">
                        <li className="d-flex align-items-center justify-content-between">
                            Home
                            <i class="ri-arrow-down-s-line"></i>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            Pages
                            <i class="ri-arrow-down-s-line"></i>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            Portfolio
                            <i class="ri-arrow-down-s-line"></i>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            Blog
                            <i class="ri-arrow-down-s-line"></i>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            Contact
                            <i class="ri-arrow-down-s-line"></i>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default RBSOffCanvas;
