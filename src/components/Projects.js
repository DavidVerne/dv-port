import React, { Component } from 'react';
import './../stylesheets/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CardDeck from 'react-bootstrap/CardDeck';
import crypto from './../images/crypto.png';
import github from './../images/github.svg';
import cyberpunk from './../images/cyberpunk.png';
import coffey from './../images/coffey.png';
import triton from './../images/triton.png';
import freeukgen from './../images/freeukgen.png';
import david from './../images/david.png';
import battleship from './../images/battleship.png';
import rollerball from './../images/rollerball.png';
import cordapp from './../images/cordapp.png';


class Projects extends Component {
    render() {
        return (
            <div class="project-container">
                <Container>
                    <h4>Here are some of my recent projects ...</h4>

                    {/* ROW 1 */}
                    <Row className="project-row">
                        <CardDeck>
                            
                            <Card className="project-block"> {/* Project 1 */}
                                <a href="https://davidverne.github.io/cryptoexchange/" target="_blank">
                                <Card.Img className="blockImg" variant="top" src={crypto} />
                                <Card.Body>
                                    <Card.Title>Crypto Exchange</Card.Title>
                                    <Card.Text>
                                        I built this cryptocurrency UI with React and Bootstrap. 
                                        It utilises various API's to display data in tables
                                        and graphically as SVG's. I used react-router to
                                        provide navigation between different crypto's providing
                                        real-time and monthly data.
                                    </Card.Text>                                
                                </Card.Body>
                                </a>
                                <Card.Footer>
                                    <a className="repoImage" href="https://github.com/DavidVerne/cryptoexchange" target="_blank">
                                        <Image src={github}/>
                                    </a>
                                    </Card.Footer>
                            </Card>

                            <Card className="project-block"> {/* Project 5 */}
                                <a href="https://github.com/DavidVerne/cordapp-blockchain-iou" target="_blank">
                                    <Card.Img className="blockImg" variant="top" src={cordapp} />
                                    <Card.Body>
                                        <Card.Title>Cordapp Blockchain IOU</Card.Title>
                                        <Card.Text>
                                            Using the Corda Platform, I built a CorDapp to model IOUs on the blockchain. 
                                            Each IOU records the fact that one node owes another node a certain amount
                                            and is defined by States, Flows and Contracts.
                                        </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                    <a className="repoImage" href="https://github.com/DavidVerne/cordapp-blockchain-iou" target="_blank">
                                        <Image src={github}/>
                                    </a>
                                    </Card.Footer>
                            </Card> 
                          
                            <Card className="project-block"> {/* Project 2 */}
                                <a href="https://davidverne.github.io/rollerball/" target="_blank">
                                <Card.Img className="blockImg" variant="top" src={rollerball} />
                                <Card.Body>
                                    <Card.Title>Rollerball</Card.Title>
                                    <Card.Text>
                                        I built a simple 3D game on the Unity platform.
                                        The scripts are written in C# and enhanced through
                                        the Unity API. The player uses the keyboard arrow keys to move 
                                        the rollerball across the game area and collect the targets. 
                                    </Card.Text>
                                </Card.Body>
                                </a>
                                <Card.Footer>
                                <a className="repoImage" href="https://github.com/DavidVerne/rollerball" target="_blank">
                                    <Image src={github}/>
                                </a>
                                </Card.Footer> 
                            </Card>

                        </CardDeck>
                    </Row>

                    {/* ROW 2 */}
                    <Row className="project-row">
                        <CardDeck>

                            <Card className="project-block"> {/* Project 4 */}
                                <a href="http://cyberpunkgaming.download/" target="_blank">
                                    <Card.Img className="blockImg" variant="top" src={cyberpunk} />
                                    <Card.Body>
                                        <Card.Title>Cyberpunk Gaming</Card.Title>
                                        <Card.Text>
                                            I built a gaming website containing a list
                                            of free games within the cyberpunk genre.
                                            The site also includes information and articles
                                            on near-distant futuristic technology including 
                                            AI, Virtual Reality  and Nanotechnology.
                                    </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                    <a className="repoImage"></a>
                                    </Card.Footer>
                            </Card>

                            <Card className="project-block"> {/* Project 3 */}
                                <a href="https://davidverne.github.io/battleship/" target="_blank">
                                <Card.Img className="blockImg" variant="top" src={battleship} />
                                <Card.Body>
                                    <Card.Title>Battleships</Card.Title>
                                    <Card.Text>
                                        I created a battleship game with React. The game is comprised
                                        of a clickable grid with each square holding its own state. Within the grid
                                        is a battleship, which the player must locate and sink 
                                        with the fewest shots possible.
                                    </Card.Text>
                                </Card.Body>
                                </a>
                                <Card.Footer>
                                <a className="repoImage" href="https://github.com/DavidVerne/battleship" target="_blank">
                                        <Image src={github}/>
                                    </a>
                                </Card.Footer>
                            </Card>

                            <Card className="project-block"> {/* Project 6 */}
                                <a href="https://www.jcoffey.co.uk/" target="_blank">
                                    <Card.Img className="blockImg" variant="top" src={coffey} />
                                    <Card.Body>
                                        <Card.Title>J Coffey Construction</Card.Title>
                                        <Card.Text>
                                            I assisted in building a website for a large
                                            construction company. The site was built on
                                            Wordpress using a custom built PHP based theme
                                            with jQuery for functionality. The design was 
                                            specific to company brand requirements. 
                                    </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                        <a className="repoImage"></a>
                                    </Card.Footer>
                            </Card>

                        </CardDeck>
                    </Row>

                    {/* ROW 3 */}
                    <Row className="project-row">
                        <CardDeck>

                            <Card className="project-block"> {/* Project 7 */}
                                <a href="https://www.tritonsystems.co.uk/" target="_blank">
                                    <Card.Img className="blockImg" variant="top" src={triton} />
                                    <Card.Body>
                                        <Card.Title>Triton Chemicals</Card.Title>
                                        <Card.Text>
                                            I assisted in building a website for a
                                            chemicals production company. The site was built on
                                            Wordpress based on a design specific to company
                                            requirements. Additional features were built into
                                            the website using various customised plugins.
                                    </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                    </Card.Footer>
                            </Card>

                            <Card className="project-block"> {/* Project 8 */}
                                <a href="https://www.freeukgenealogy.org.uk/" target="_blank">
                                    <Card.Img className="blockImg" variant="top" src={freeukgen} />
                                    <Card.Body>
                                        <Card.Title>Free UK Genealogy</Card.Title>
                                        <Card.Text>
                                            I assisted in the implementation and management of Google Analytics
                                            code into the website of a global charity. The
                                            resultant data recieved has since been used to greatly increase 
                                            awareness of the organisations work.
                                    </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                    </Card.Footer>
                            </Card>

                            <Card className="project-block"> {/* Project 9 */}
                                <a href="#">
                                    <Card.Img className="blockImg" variant="top" src={david} />
                                    <Card.Body>
                                        <Card.Title>Genesis</Card.Title>
                                        <Card.Text>
                                            I created my own Wordpress theme called Genesis using the Wordpress Codex library. 
                                            The theme has been used on my previous personal website and will soon be available 
                                            to download from the Wordpress theme library. 
                                    </Card.Text>
                                    </Card.Body>
                                    </a>
                                    <Card.Footer>
                                    </Card.Footer>
                            </Card>

                        </CardDeck>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Projects;