import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";


function StatcheckLayout(props) {

    return (
        <div>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.link as={Link} to="/home">Home</Nav.link>
                        <Nav.link as={Link} to="/profile">Profile</Nav.link>
                        <Nav.link as={Link} to="/champions">Champions</Nav.link>
                        <Nav.link as={Link} to="/createbuilds">Create Builds</Nav.link>
                        <Nav.link as={Link} to="/guides">Guides</Nav.link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default StatcheckLayout;