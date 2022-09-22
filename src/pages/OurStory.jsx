import React from 'react';
import {pageTitle, pageContainers} from '../styling'
import timelineImage from '../images/timeline.png'
import Footer from '../components/Footer';

function OurStory() {
    return (
        <div style={pageContainers}>
            <h1 style={pageTitle}>Our Story</h1>
            <img src={timelineImage}  alt="logo" width="50%"/>
            <Footer/>
        </div>
    );
}

export default OurStory;