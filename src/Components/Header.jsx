import React, { Component} from "react";
import { Button, Container, Form, FormControl, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import logo from "./logo192.png";


export default class Header extends Component{


    render() {
        return (
            <>
            <Navbar  sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo"  /> React site
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsite-navbar-nav"/>
                    <Navbar.Collapse id="responsite-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Articles </Nav.Link>
                            <Nav.Link href="/users">Users </Nav.Link>
                            <Nav.Link href="/photos">Photos </Nav.Link>
                        </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                type="text"
                                placeholder="Search"
                                value="Поиск"
                                style={{ marginRight: '10px' }}
                                />
                                <Button variant="outline-info"> Search </Button>
                            </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </>
        )
    }
}
