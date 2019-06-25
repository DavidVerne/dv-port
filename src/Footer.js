import React, { Component } from 'react';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends Component {
    render() {
        return (
            <div class="nav-container">
                <Container>
                    <Navbar bg="primary" variant="primary">
                        <Navbar.Brand href="#"></Navbar.Brand>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Footer;