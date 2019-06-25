import React, { Component } from 'react';
import './../stylesheets/Main.css';
import About from './About';
import Projects from './Projects';
import Container from 'react-bootstrap/Container';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <About />
                    <hr />
                    <Projects />
                </Container>
            </div>
        );
    }
}

export default Main;