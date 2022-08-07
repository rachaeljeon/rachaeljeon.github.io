import React from 'react';

import { Container, Modal, Row, Col, Form, Button } from 'react-bootstrap';

export function HomePage() {
    console.log("YOU MADE INSIDE HOMEPAGE")
    return (
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    //   <form onSubmit={this.handleSubmit}>
    //       <div className="container">
    //           <div className="jumbotron">
    //               <h1>Hello, World!</h1>
    //               <br />
    //               <h5>Welcome to my blog :)</h5>
    //               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum maxime ipsam. Laborum sint ad sequi? Commodi repellat, reiciendis error quam assumenda nulla eveniet sit quidem qui, beatae, cum mollitia.</p>
    //               <p><a className="btn btn-primary btn-lg" role="button">Learn More</a></p>
    //           </div>
    //           <div className="random">
    //               {/* <img src={Background} alt="Cannot load :("></img> */}
    //               <Modal.Body className="show-grid">
    //                   <Container>
    //                       <Row>
    //                           <Col xs={6} md={6}>
    //                           <h3>Kiss in the rain.</h3>
    //                           <div className='mb-4 md:mb-0 text-lg'>
    //                               <time dateTime='2022-06-07T11:21:06'>June 7, 2022</time>
    //                           </div>
    //                           <div>
    //                               One of my favorite hobbies of all time has been journaling. <br></br>
    //                               <p></p>
    //                               To me, journaling has been my main source to simply get to know more about myself.
    //                               It's an intimate place where I share my deeply rooted emotions and feelings.
    //                               And as such, I truly believe this act has brought me closer to myself, and I mean my truest self.  <br></br>
    //                               <p></p>
    //                               It's as if the act of journaling has made me assure that I've made a secret promise to myself to devote to myself to be intentional and real.
    //                               There's no shame, there's no judgement. It's a freezone. That's why I can be free and show my most vulnerable, authentic self.  <br></br>
    //                               <p></p>
    //                               As a human being progresses through life, I firmly believe it's crucial for one to come back and reconnect with oneself. And for me, jouranling has been that way. 
    //                           </div>
    //                           </Col>
    //                           <Col xs={6} md={6}>
    //                               <h3>Quote of the Day</h3>
    //                               <p>Much of my inspiration comes from within but I value wisdom from others as well.</p>
    //                               <div className='flex items-center'>
    //                                   <div className='w-12 h12 relative mr-4'>
    //                                       {/* <img src={Ambitions} alt="Cannot load :("></img> */}
    //                                   </div>
    //                               </div>
    //                           </Col>
    //                           <p></p>
    //                           <div className=''>
    //                               <h2>Pics!</h2>
    //                           </div>
    //                           <img src="https://media.istockphoto.com/photos/pink-sunset-picture-id1139149089?b=1&k=20&m=1139149089&s=170667a&w=0&h=LcJIu-j_k0mz6ItmKawPuoRiBmuSivvGAEHkf98cfdQ="></img>
    //                           <div className='text-xl font-bold'>Copy Right - <i>I really enjoy sunsets :)</i></div>
    //                           {/* <img src={Sky} alt="Cannot load :("></img>
    //                           <p></p>
    //                           <img src={Homey} alt="Cannot load :("></img> */}
    //                       </Row>
    //                   </Container>
    //               </Modal.Body>
    //           </div>
    //           <button type="button" className="btn btn-success" href="/contact">See ya!</button>
    //       </div>            
    //   </form>
    );
}