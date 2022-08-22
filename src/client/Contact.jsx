import React, {useState} from 'react';
import { Container, Form, Button, Modal} from 'react-bootstrap';

export function Contact({url}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [test, setTest] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async() => {

        const requestOptions = {
            method: 'POST',
            headers: {

            }
        }
        fetch('/sendmail')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        // const reqeustOptions = {
        //     method: 'GET',
        //     url: '/sendmail'
        //     // body: JSON.stringify(show)
        // }

        // const message_url = url + "/sendmail";
        // console.log("----------1---------")
        // console.log(message_url)
        // const response = await fetch(message_url, reqeustOptions);
        // console.log("----------2---------")
        // await window.location.reload()
        // const data = await response.json();
        // console.log("data");
        // console.log(data);
        ///event?event_id=${data[0].Event_ID}`;


    //     const response = await fetch(message_url, {

    //         headers: {
    //             Authorization: "Bearer " + window.getAuth(),
    //         },
    //     }).then((response) => response.json())

    //     if (response['message'] === 'Valid CSDID') // backend: res.send({message: 'Valid CDSID'})
    // 
    }

    useEffect(() => {
        fetch("/sendmail")
        .then(response => response.json()
        .then(data => {
            console.log(data)
        })
    )}, []);
      
    return (
        <Container>
            <br>
            </br>
            <br>
            </br>
            <h2>Contact Me :)</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="name" 
                    placeholder="Enter name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
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
                    onClick={handleShow}>
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