import React from 'react';
import {Navbar,Nav} from "react-bootstrap";

const nav =()=>{
    return(
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Invitation</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default nav;