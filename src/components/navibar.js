import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navibar() {

    function handleClick() {
        localStorage.setItem('verification', false);
        document.location.href = '/login';
    }

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
                        <Button variant="primary" className="mr-3" href="/login" >Log In</Button>
                        <Button variant="secondary" className="mr-3" onClick={handleClick}>Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}