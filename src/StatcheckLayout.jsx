import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";


function StatcheckLayout(props) {

    return (
        <div>
            <Navbar bg="dark" variant='dark' fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/champions">Champions</Nav.Link>
                        <Nav.Link as={Link} to="/createbuild">Create Builds</Nav.Link>
                        <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default StatcheckLayout;