import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navibar() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Тестовое задание</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="mr-2" to="/">На главную</Link>
                        <Link className="mr-2" to="/news">Новости</Link>
                        <Link className="mr-2" to="/profile">Профиль</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}