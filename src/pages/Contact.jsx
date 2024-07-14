import React, {useState, useEffect } from 'react';
import { Container, Form, Button, Modal} from 'react-bootstrap';

export function Contact() {

    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
      
    function handleShow() {
        setShow(true)
    }

    function handleClose() {
        setShow(false)
    }

    return (
        <Container>
            <br></br>
            <br></br>
            <h2>Contact Me :)</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="Enter name"
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <Form.Text className="text-muted">
                        I'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Leave a message here!"
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                    />
                </Form.Group>
                
                <Button 
                    variant="primary"
                    onClick={handleShow}
                >
                Submit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you'd like to cotinue to submitting?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendMessage}>
                        Send
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Form>
        </Container>
    )
}