import React from 'react';
import { Container, Carousel, Modal, Row, Col, Figure, ProgressBar} from 'react-bootstrap';
import Ambitions from './images/ambitions.png'
import Homey from './images/homey.jpeg'
import Sky from './images/sky.jpeg'

export function MainPage() {
    console.log("YOU MADE INSIDE MainPage")
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sky}
                    alt="Korea - 2019"
                    />
                    <Carousel.Caption>
                    <h3>Korea - 2019</h3>
                    <p>Embracing all the goodness of what nature has to offer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Homey}
                    alt="Seattle - 2021"
                    />

                    <Carousel.Caption>
                    <h3>Christmas Time</h3>
                    <p>
                        Spending time with my sisters is a fortunate time to have
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <Modal.Body>
                <Row xs={1} md={2}>
                    <Col>
                        <h3>Kiss in the rain.</h3>
                        <div className='mb-4 md:mb-0 text-lg'>
                            <time dateTime='2022-06-07T11:21:06'>June 7, 2022</time>
                        </div>
                        <div>
                            One of my favorite hobbies of all time has been journaling. <br></br>
                            <p></p>
                            To me, journaling has been my main source to simply get to know more about myself.
                            It's an intimate place where I share my deeply rooted emotions and feelings.
                            And as such, I truly believe this act has brought me closer to myself, and I mean my truest self.  <br></br>
                            <p></p>
                            It's as if the act of journaling has made me assure that I've made a secret promise to myself to devote to myself to be intentional and real.
                            There's no shame, there's no judgement. It's a freezone. That's why I can be free and show my most vulnerable, authentic self.  <br></br>
                            <p></p>
                            As a human being progresses through life, I firmly believe it's crucial for one to come back and reconnect with oneself. And for me, journaling has been that one way. 
                        </div>
                    </Col>
                    <Col>
                        <h3>Quote of the Day</h3>
                        <p>Much of my inspiration comes from within but I value wisdom from others as well.</p>
                        <div className='flex items-center'>
                            <Figure>
                                <Figure.Image
                                    width={671}
                                    height={780}
                                    alt="171x180"
                                    src={Ambitions}
                                />
                                <Figure.Caption>
                                    QUOTE FROM: JAMES CLEAR
                                </Figure.Caption>
                            </Figure>
                        </div>
                    </Col>
                    <p></p>
                    <p></p>
                </Row>
            </Modal.Body>
            <Modal.Body>
                <Row>
                    <Col>
                    <h3>Coding Skills Proficiency</h3>
                    <p>Here's a breakdown of my technical skills I've developed over the years!</p>
                        <div>
                            <ProgressBar variant="success" now={90} />
                            <p>Python</p>
                            <ProgressBar variant="success" now={80} />
                            <p>JavaScript</p>
                            <ProgressBar variant="warning" now={70} />
                            <p>HTML/CSS</p>
                            <ProgressBar variant="info" now={50} />
                            <p>C</p>
                            <ProgressBar variant="info" now={45} />
                            <p>Scala</p>
                            <ProgressBar variant="danger" now={100} />
                            <p>LEARNING :)</p>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Container>
    )
}