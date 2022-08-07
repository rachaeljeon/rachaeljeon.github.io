import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import Sky from './images/sky.jpeg'
import Ambitions from './images/ambitions.png'
import Homey from './images/homey.jpeg'

export function Github() {
    console.log("YOU MADE INSIDE GITHUB")
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sky}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Homey}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
  );
}