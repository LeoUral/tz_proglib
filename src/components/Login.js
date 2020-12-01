import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'Admin',
            password: '12345',
            valueLogin: '',
            valuePassword: '',
            verification: false
        }
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({ valueLogin: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ valuePassword: event.target.value });
    }

    handleSubmit(event) {
        const login = this.state.login;
        const password = this.state.password;

        if (login === this.state.valueLogin && password === this.state.valuePassword) {
            this.setState({ verification: true });
            setTimeout(() => {
                localStorage.setItem('verification', this.state.verification);
                document.location.href = '/profile';
            }, 500);

        } else {
            this.setState({ verification: false })
            setTimeout(() => {
                localStorage.setItem('verification', this.state.verification);
            }, 500);
            alert('Логин или пароль введены не верно!');
        }

        event.preventDefault();
    }

    render() {
        return (
            <>
                <Container>
                    <h3>Введите данные для входа</h3>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId="formBasicLogin">
                            <Form.Label>Login Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Login" onChange={this.handleChangeLogin} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </>
        );
    }
}