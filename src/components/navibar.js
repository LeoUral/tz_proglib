import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navibar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            textBtn: 'Log In'
        }
    }

    handleClick() {
        if (localStorage.getItem('verification') === 'false') {
            this.setState({ textBtn: 'Log In' })
            document.location.href = '/login';
        }
        if (localStorage.getItem('verification') === 'true') {
            this.setState({ textBtn: 'Log Out' });
            localStorage.setItem('verification', false);
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
                            <Button variant="primary" className="mr-3" onClick={this.handleClick} >{this.state.textBtn}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}