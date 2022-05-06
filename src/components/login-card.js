import React from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

function LoginCard() {
    return (
        <Container fluid='md'><br></br>
            <Card border="dark">
                <Card.Header><h3>Login</h3></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="login">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <br />
        </Container>
    );

}

export default LoginCard;