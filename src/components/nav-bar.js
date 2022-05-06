import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Diamondback Chess</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#players">Players</Nav.Link>
                        <Nav.Link href="#sections">Sections</Nav.Link>
                        <Nav.Link href="#pairings">Pairings</Nav.Link>
                        <Nav.Link href='#results'>Results</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}

export default NavBar;