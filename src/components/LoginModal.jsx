import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function LoginModal(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // What this should do is send an api call to authenticate the user, then if success, reload as logged in. Else, it should say "Incorretct user/pass"
    const handleSubmit = (e) => {
        
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>
                Close
            </Button>
            <Button variant="secondary" onClick={() => {
                props.onHide;
                navigate("/register");
            }}>
                Register
            </Button>
            <Button variant="primary" onClick={props.onHide}>
                Login
            </Button>
        </Modal.Footer>
      </Modal>
  );
}