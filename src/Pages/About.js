import React, { Component } from "react";
import { Col, Container, Nav, NavLink, Row, Tab, TabContainer, TabContent, TabPane } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="legt-tabs-exaple" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <TabPane eventKey="first">
                                    <img
                                        src="https://s3-alpha.figma.com/hub/file/3646046829/d3f7e8d4-79a8-4192-883c-767ba821810f-cover.png"
                                        alt="Design"
                                        className="img-fluid"
                                    />
                                    <p>Content for the Design tab goes here.</p>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <img
                                        src="https://www.proserveit.com/hs-fs/hubfs/Imported_Blog_Media/SharePoint-Homepage-Screenshot-1.png?width=1041&height=590&name=SharePoint-Homepage-Screenshot-1.png"
                                        alt="Team"
                                        className="img-fluid"
                                    />
                                    <p>Content for the Team tab goes here.</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img
                                        src="https://www.codeimmersives.com/wp-content/uploads/2021/04/term1.png"
                                        alt="Team"
                                        className="img-fluid"
                                    />
                                    <p>Content for the Programming tab goes here.</p>
                                </TabPane><TabPane eventKey="fourth">
                                    <img
                                        src="https://www.deepcrawl.com/wp-content/uploads/2019/07/javascript-frameworks.png"
                                        alt="Team"
                                        className="img-fluid"
                                    />
                                    <p>Content for the Frameworks tab goes here.</p>
                                </TabPane><TabPane eventKey="fifth">
                                    <img
                                        src="https://magnetoitsolutions.com/wp-content/uploads/2019/02/Best-JavaScript-Frameworks.jpg"
                                        alt="Team"
                                        className="img-fluid"
                                    />
                                    <p>Content for the Libraries tab goes here.</p>
                                </TabPane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}
