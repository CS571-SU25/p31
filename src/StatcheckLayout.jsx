import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link, Outlet, useNavigate  } from "react-router-dom";
import LoginModal from "./components/LoginModal"


function StatcheckLayout(props) {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("logged_in_user");
        console.log("AFTER removal:", localStorage.getItem("logged_in_user")); // Should log `null`
        setIsLoggedIn(false);
        navigate("/")
    }
    return (
        <>
            <Navbar bg="dark" variant='dark' fixed="top">
                <Container fluid>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/champions">Champions</Nav.Link>
                        <Nav.Link as={Link} to="/createguide">Create Guide</Nav.Link>
                        <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
                        {!isLoggedIn ? (
                            <Nav.Link onClick={() => setShowModal(true)}><div style={{color: "white"}}>Login/Register</div></Nav.Link>
                        ) : <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <div style={{paddingTop: '56px', marginLeft: '24px', marginRight: '24px'}}>
                <Outlet />
            </div>
            <LoginModal
            show={showModal}
            onHide={() => setShowModal(false)}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            />
        </>
    )
}

export default StatcheckLayout;