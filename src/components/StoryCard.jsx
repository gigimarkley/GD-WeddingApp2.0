import React from 'react';
import { Card, Row, Col} from 'reactstrap';
import {storyCard} from '../styling'

function StoryCard({cardInfo}) {

    return (
 (window.innerWidth >= 800) ? (
    <Card style={storyCard}>
        <Row style={{width:'80%'}}>
            <Col style={{textAlign: 'right'}}>
                <h4 style={{ marginTop:'10vw'}}>{cardInfo.date}</h4>
                <p>{cardInfo.description}</p>
            </Col>
            <Col style={{paddingRight:'90px'}}>
                <img src={cardInfo.pic} alt="logo" width="100%" />
            </Col>
        </Row>
    </Card>
 ) : 
 (
    <Card style={storyCard}>
        <Row style={{width:'90%'}}>
            <Col>
                <h4>{cardInfo.date}</h4>
                <p>{cardInfo.description}</p>
            </Col>
            <Col>
                <img src={cardInfo.pic} alt="logo" width="125vw" />
            </Col>
        </Row>
    </Card>
 )     
    );
}

export default StoryCard;