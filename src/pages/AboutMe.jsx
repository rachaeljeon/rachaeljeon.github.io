import React from 'react';
import Me from './images/me.JPG'
import { Container, Modal, Row, Col, Figure } from 'react-bootstrap';

export default function AboutMe() {
    console.log("YOU MADE INSIDE AboutMe")
    return (
        <Container>
            <div>
                <h1>
                    Hello there!
                </h1>
                <Figure.Image
                    width={671}
                    height={780}
                    alt="171x180"
                    src={Me}
                />
            </div>
        </Container>
    )
}