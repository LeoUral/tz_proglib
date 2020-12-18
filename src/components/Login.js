import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verification: false,
            dataPost: ''
        };
        this.dataSend = {
            email: '',
            password: ''
        };
        // body POST-запроса
        //email: 'max@test.com',
        // password: '12345'

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verification = this.verification.bind(this);
        this.postResponse = this.postResponse.bind(this);
    }

    // получение ID пользователя, по вводу email и password
    async postResponse() {
        this.response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.dataSend)
        })
        this.setState({ dataPost: await this.response.json() }); //ждем окончание асинхронного запроса
        console.log(this.state.dataPost.status); //полученные данные STATUS с сервера

        this.verification(this.state.dataPost.status);
    };

    verification(dataVerification) {

        if (dataVerification === 'ok') {
            console.log('OK');
            this.setState({ verification: true });
            setTimeout(() => {
                localStorage.setItem('verification', this.state.verification);
                //оставлю включение страницы profil через localStorage
                document.location.href = '/profile';
            }, 500);
        } else {
            console.log('NOT OK');
            this.setState({ verification: false })
            setTimeout(() => {
                localStorage.setItem('verification', this.state.verification);
            }, 500);
            alert('Логин или пароль введены не верно!');
        }
    }

    handleChangeLogin(event) {
        this.dataSend.email = event.target.value;
    }

    handleChangePassword(event) {
        this.dataSend.password = event.target.value;
    }

    handleSubmit(event) {
        this.postResponse();
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
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChangeLogin} />
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