import React from 'react';
import { Card, Row, Col} from 'reactstrap';
import {storyCardMobile} from '../styling'

function StoryCard({cardInfo}) {

    return (
 (window.innerWidth >= 800) ? (
    <Card style={storyCardMobile}>
        <Row style={{width:'80%'}}>
            <Col style={{textAlign: 'right'}}>
                <h4 style={{ marginTop:'8vw'}}>{cardInfo.date}</h4>
                <p>{cardInfo.description}</p>
            </Col>
            <Col>
                <Row>
                    <Col><img src={cardInfo.pic} alt="logo" width="400vw" /></Col>
                    <Col></Col>
                </Row>
                
            </Col>
        </Row>
    </Card>
 ) : 
 (
    <Card style={storyCardMobile}>
        <Row style={{width:'90%'}}>
            <Col>
                <h4>{cardInfo.date}</h4>
                <p>{cardInfo.description}</p>
       
                <img src={cardInfo.pic} alt="logo" width={window.innerWidth*.5} />
            </Col>
        </Row>
    </Card>
 )     
    );
}

export default StoryCard;