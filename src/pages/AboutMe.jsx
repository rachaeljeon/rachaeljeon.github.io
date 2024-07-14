import React from 'react';
import Me from "../images/me.jpeg"
import { Container, Figure } from 'react-bootstrap';

export default function AboutMe() {

    return (
        <Container>
            <div>
                <h1>Hello there!</h1>
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