import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function LoginModal(props) {
    console.log(props);

    const [modalMode, setModalMode] = useState("login"); // Default to login. Handles which "modal" appears
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const clearFields = () => { // Clear modal on state change
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }

    const switchToRegister = () => {
        clearFields();
        setModalMode("register");
    }

    const switchToLogin = () => {
        clearFields();
        setModalMode("login");
    }
    // What this should do is send an api call to authenticate the user, then if success, reload as logged in. Else, it should say "Incorretct user/pass"
    const handleLogin = () => {
        let successfulLogin = 0;
        if(username && password) {
            const userList = JSON.parse(sessionStorage.getItem("user_list")); // [{user: "", password: ""}, ...]
            console.log("userList:");
            console.log(userList);
            userList.forEach((account) => {
                if(account.user.toLowerCase() === username.toLowerCase()) {
                    if(account.password.toLowerCase() === password.toLowerCase()) {
                        sessionStorage.setItem("logged_in_user", username);
                        successfulLogin = 1;
                    }
                }
            })
            if(!successfulLogin) {
                window.alert("Warning! Username or Password is incorrect!");
            } else {
                window.alert("Login successful!");
                props.setIsLoggedIn(true);
                console.log("Logged in");
                console.log(props.isLoggedIn);
                clearFields();
                props.onHide();
            }
        } else {
            window.alert("You forgot to supply a username or passsword");
        }
    }




    const handleRegister = () => {

        let userExists = 0;
        const userList = JSON.parse(sessionStorage.getItem("user_list")); // [{user: "", password: ""}, ...]

        if(confirmPassword !== password) {
            window.alert("Passwords do not match!");
        } else {
            userList.forEach((account) => {
                if(account.user.toLowerCase() === username) {
                    window.alert(`User ${username} already exists!`);
                    userExists = 1;
                    return;
                }
            })
            if(!userExists) {
                userList.push({"user": username, "password": password});
                sessionStorage.setItem("user_list", JSON.stringify(userList));
                sessionStorage.setItem("logged_in_user", username);
                props.setIsLoggedIn(true);
                props.onHide();
                clearFields();
                window.alert("Successfully registered!");
            }  
        }

    };


    const handleClose = () => {
        switchToLogin();
        props.onHide();
    }
    return (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="Type username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                    />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Type password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    />
                </Form.Group>
                { modalMode === "register" && (
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                    >
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Type password..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoFocus
                        />
                    </Form.Group>
                )}
            </Form>
        </Modal.Body>
        {modalMode === "register" && (
        <Modal.Footer>
            <Button variant="danger" onClick={ () => {
                handleClose();
                }}>
                Close
            </Button>   
            <Button variant="secondary" onClick={() => {
                switchToLogin();
            }}>
                Go Back
            </Button>
            <Button variant="primary" onClick={ ()=> {
                handleRegister();
            }}>
                Register
            </Button>
        </Modal.Footer>
        )}

        {modalMode === "login" && (
            <Modal.Footer>
                <Button variant="danger" onClick={ () => {
                    handleClose();
                    }}>
                    Close
                </Button>   
                <Button variant="secondary" onClick={switchToRegister}>
                    Register
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
        )}
    </Modal>
);
}