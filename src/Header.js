import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'David Verne'
        }
    }
    render() {
        return (
            <div class="nav-container">
                <Container>
                    <Navbar bg="primary" variant="primary">
                        <Navbar.Brand className="logo" href="DavidVerne">{this.state.name}</Navbar.Brand>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;