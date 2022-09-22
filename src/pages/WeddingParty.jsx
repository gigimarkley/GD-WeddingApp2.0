import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import placeholderpic from '../images/placeholderpic.png'
import {pageTitle, weddingPartyNames, weddingPartyDescription, weddingPartyCards, pageContainers, weddingPartyRow } from '../styling'

function WeddingParty() {
    return (
        <div style={pageContainers}>
            <h1 style={pageTitle}>Wedding Party</h1>
            <Row style={weddingPartyRow}>   
                <Col></Col>
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Gaby</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Alex</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col></Col>
            </Row>
            <Row style={weddingPartyRow}>   
                <Col></Col>
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Shawdee</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Ted</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col></Col>
            </Row>
            <Row style={weddingPartyRow}>   
                <Col></Col>
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Julia</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Jacob</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col></Col>
            </Row>
            <Row style={weddingPartyRow}>   
                <Col></Col>
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Sonja</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col > 
                    <Card style={weddingPartyCards}>
                        <CardHeader>
                            <h2 style={weddingPartyNames}>Aaron</h2> 
                        </CardHeader>
                        <CardBody>
                        <img src={placeholderpic} alt="logo" width="60%" />
                        </CardBody>
                        <CardFooter>
                        <p style={weddingPartyDescription}>little thingy about our relationship little thingy about our relationship little thingy about our relationship little thingy about our relationship</p>
                        </CardFooter>
                    </Card>
                </Col> 
                <Col></Col>
            </Row>
    
        </div>
    );
}

export default WeddingParty;