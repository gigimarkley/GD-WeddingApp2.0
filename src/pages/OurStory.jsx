import React from 'react';
import {pageTitle} from '../styling'
import backgroundImage from '../images/background.png'

function OurStory() {
    return (
        <div style={{alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
            <h1 style={pageTitle}>Our Story</h1>
            <p>insert story image here</p>
        </div>
    );
}

export default OurStory;