import React from 'react';
import { Card } from 'reactstrap';
import placeholderpic from '../images/placeholderpic.png'
import {pageTitle, weddingPartyNames, text} from '../styling'
import backgroundImage from '../images/background.png'

function WeddingParty() {
    return (
        <div style={{ alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
            <h1 style={pageTitle}>Wedding Party Page</h1>
            <Card>
                <h4 style={weddingPartyNames}>Gaby</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Shawdee</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Julia</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Sonja</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Alex</h4> 
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Ted</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Jacob</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
            <Card>
                <h4 style={weddingPartyNames}>Aaron</h4>
                <img src={placeholderpic} alt="logo" width="20%" height="20%" />
                <p style={text}>little thingy about our relationship</p>
            </Card>
                 
                
                
                

                
                
                
                
        </div>
    );
}

export default WeddingParty;