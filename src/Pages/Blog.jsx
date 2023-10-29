import React, { Component } from "react";
import { Container, Media, Col, Row, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText } from "react-bootstrap";


export default class Blog extends Component {
    render() {
        return(
            <Container>
                <Row>
                <Col md="9" className="mt-5">
        <div className="d-flex align-items-center mb-4">
          <img
            width={150}
            height={150}
            className="mr-3"
            src="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-image"
          />
          <div className="media-body">
            <h5>Blog post</h5>
            <p>
            The development of computer games can be carried out either by one person or by a company (team of developers). Commercial games are created by teams of developers hired by a single company. Firms can specialize in the production of games for personal computers, game consoles or tablet computers. Development may be financed by another, larger company - the publisher. Once development is complete, the publishing company distributes the game and bears the associated costs. The opposite approach is such a development when a company independently (without the participation of publishers) distributes copies of games, for example, through digital distribution.            </p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <img
           width={150}
           height={150}
           className="mr-3"
            src="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-image"
          />
          <div className="media-body">
            <h5>Blog post</h5>
            <p>
            The development of computer games can be carried out either by one person or by a company (team of developers). Commercial games are created by teams of developers hired by a single company. Firms can specialize in the production of games for personal computers, game consoles or tablet computers. Development may be financed by another, larger company - the publisher. Once development is complete, the publishing company distributes the game and bears the associated costs. The opposite approach is such a development when a company independently (without the participation of publishers) distributes copies of games, for example, through digital distribution.            </p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <img
           width={150}
           height={150}
           className="mr-3"
            src="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-image"
          />
          <div className="media-body">
            <h5>Blog post</h5>
            <p>
            The development of computer games can be carried out either by one person or by a company (team of developers). Commercial games are created by teams of developers hired by a single company. Firms can specialize in the production of games for personal computers, game consoles or tablet computers. Development may be financed by another, larger company - the publisher. Once development is complete, the publishing company distributes the game and bears the associated costs. The opposite approach is such a development when a company independently (without the participation of publishers) distributes copies of games, for example, through digital distribution.            </p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <img
            width={150}
            height={150}
            className="mr-3"
            src="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-image"
          />
          <div className="media-body">
            <h5>Blog post</h5>
            <p>
            The development of computer games can be carried out either by one person or by a company (team of developers). Commercial games are created by teams of developers hired by a single company. Firms can specialize in the production of games for personal computers, game consoles or tablet computers. Development may be financed by another, larger company - the publisher. Once development is complete, the publishing company distributes the game and bears the associated costs. The opposite approach is such a development when a company independently (without the participation of publishers) distributes copies of games, for example, through digital distribution.            </p>
          </div>
        </div>
                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Categories</h5>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>Html/Css</ListGroupItem>
                            <ListGroupItem>JavaScript</ListGroupItem>
                            <ListGroupItem>Python</ListGroupItem>
                            <ListGroupItem>Java</ListGroupItem>
                            <ListGroupItem>C++</ListGroupItem>
                        </ListGroup>
                    </Card>

                    <Card className="mt-3" bg="light">
                        <CardBody >
                            <CardTitle>Site widget</CardTitle>
                            <CardText>
                            The development of computer games can be carried out either by one person or by a company (team of developers). Commercial games are created by teams of developers hired by a single company. Firms can specialize in the production of games for personal computers, game consoles or tablet computers. Development may be financed by another, larger company - the publisher. Once development is complete, the publishing company distributes the game and bears the associated costs. The opposite approach is such a development when a company independently (without the participation of publishers) distributes copies of games, for example, through digital distribution.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
            </Container>
        )
    }
}