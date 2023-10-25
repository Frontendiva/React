import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Container } from "react-bootstrap";
import YourComponent from "../Components/YourComponent";

export default class Home extends Component {
    render() {
        return(
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4"> Our team</h2>
                <CardGroup className="mb-4">
                  <Card bg="info" border="dark"style={{ margin: "0 1rem", borderWidth: "2px" }} >
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                  </Card>

                  <Card bg="warning" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }}>
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                        </CardBody>
                        <CardImg 
                    variant="top"
                    src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     />
                  </Card>
                  <Card bg="success" border="dark" style={{ margin: "0 1rem", borderWidth: "2px"  }} >
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/8837438/pexels-photo-8837438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                  </Card>
                  <Card bg="secondary" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }}>
                    
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/7710118/pexels-photo-7710118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  </Card>
                </CardGroup>
                <CardGroup className="mb-4">
                  <Card bg="light" border="dark"style={{ margin: "0 1rem", borderWidth: "2px" }} >
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                  </Card>

                  <Card bg="info" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }}>
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                        </CardBody>
                        <CardImg 
                    variant="top"
                    src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     />
                  </Card>
                  <Card bg="danger" border="dark" style={{ margin: "0 1rem", borderWidth: "2px"  }} >
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/8837438/pexels-photo-8837438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                  </Card>
                  <Card bg="warning" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }}>
                    
                    <CardBody>
                        <CardTitle>Developers</CardTitle>
                        <CardText>
                        A mobile developer is a programmer who creates applications for portable devices from phones to metering devices. This is a universal specialist who develops products for the Android and IOS operating systems, and also creates cross-platform applications.
                        </CardText>
                        <Button variant="primary"> About team</Button>
                    </CardBody>
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/7710118/pexels-photo-7710118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}