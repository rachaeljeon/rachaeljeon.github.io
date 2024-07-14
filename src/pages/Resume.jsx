import React, {useState} from 'react'
import MyResume from '../images/resume.png'
import {Container, Figure} from 'react-bootstrap';

export default function Resume() {

    return (
        <div className='resume'>
            <Container>
                <h1>Here we go!</h1>
                <Figure>
                    <Figure.Image
                        width={1171}
                        height={1280}
                        alt="271x380"
                        src={MyResume}
                        className='myresume'
                    />
                    <Figure.Caption>
                        Note
                    </Figure.Caption>
                </Figure>
            </Container>
        </div>
    )
}