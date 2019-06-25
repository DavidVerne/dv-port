import React, { Component } from 'react';
import './../stylesheets/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import david from './../images/david.jpg';
import github from './../images/github.svg';
import linkedin from './../images/linkedin.svg';
import twitter from './../images/twitter.svg';
import ListGroup from 'react-bootstrap/ListGroup';

class About extends Component {
    render() {
        return (
            <div className="about-section">
                <Container>
                    <Row>
                        <Col>
                            <div id="about-left">
                                <p>Hi, I'm David. I graduated with a degree in physics and have a passion for building web applications.
                                    I mostly work in frontend development utilising my Javascript skills with technologies like React and Redux
                                    and using API's to build feature rich UI's. 
                                    I also have experience working serverside on the .NET framework with C#.
                                </p>
                                <p>
                                    As a developer I'm used to working as part of an agile team and collaborating on projects using GIT,
                                    Azure DevOps, Microsoft Teams and many other fantastic tools. 
                                </p>
                                <p>
                                    If you'd like to get in touch, add me on Linkedin. It would be great to hear from you. 
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div id="about-center">
                                <Image src={david} rounded />
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/david-verne-329385103/" target="_blank"><Image src={linkedin} rounded /></a>
                                    <a href="https://twitter.com/DavidWebTech" target="_blank"><Image src={twitter} rounded /></a>
                                    <a href="https://github.com/DavidVerne" target="_blank"><Image src={github} rounded /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div id="about-right">
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" active>Technical Skills</ListGroup.Item>
                                    <ListGroup.Item as="li">HTML5</ListGroup.Item>
                                    <ListGroup.Item as="li">CSS3</ListGroup.Item>
                                    <ListGroup.Item as="li">JavaScript</ListGroup.Item>
                                    <ListGroup.Item as="li">C#</ListGroup.Item>
                                    <ListGroup.Item as="li">React / Redux</ListGroup.Item>
                                    <ListGroup.Item as="li">.NET</ListGroup.Item>
                                    <ListGroup.Item as="li">Bootstrap</ListGroup.Item>
                                    <ListGroup.Item as="li">Wordpress & Umbraco</ListGroup.Item>
                                    </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;