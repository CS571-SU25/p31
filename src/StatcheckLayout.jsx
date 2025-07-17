import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";


function StatcheckLayout(props) {

    return (
        <>
            <Navbar bg="dark" variant='dark' fixed="top">
                <Container fluid>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/champions">Champions</Nav.Link>
                        <Nav.Link as={Link} to="/createbuild">Create Builds</Nav.Link>
                        <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{paddingTop: '56px'}}>
                <Outlet />
            </div>
        </>
    )
}

export default StatcheckLayout;