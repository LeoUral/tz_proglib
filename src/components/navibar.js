import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './store';
import logOut from './actionCreator/logOut';

export default class Navibar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        if (localStorage.getItem('verification') === 'false') {
            document.location.href = '/login';
        }
        if (localStorage.getItem('verification') === 'true') {
            store.dispatch(logOut('Log In')); // ! меняем store при выходе на LogIn
            localStorage.setItem('verification', false);
            document.location.href = '/';
        }
    }

    render() {


        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Тестовое задание №2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="mr-3" to="/">На главную</Link>
                            <Link className="mr-3" to="/news">Новости</Link>
                            <Link className="mr-3" to="/profile">Профиль</Link>
                        </Nav>
                        <Nav >
                            <Button variant="primary" className="mr-3" onClick={this.handleClick} >{this.props.btn}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}