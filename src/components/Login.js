import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Login() {

    return (
        <>
            <Container>
                <h3>Введите данные для входа</h3>
                <Form>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Login" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    );
}