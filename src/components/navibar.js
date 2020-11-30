import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Navibar() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Тестовое задание</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">На главную</Nav.Link>
                        <Nav.Link href="#home">Новости</Nav.Link>
                        <Nav.Link href="#home">Профиль</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}