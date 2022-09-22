import React from 'react';
import { Card, Row, Col} from 'reactstrap';
import {storyCard} from '../styling'
import placeholderpic from '../images/placeholderpic.png'

function StoryCard({cardInfo}) {

    return (
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
    );
}

export default StoryCard;