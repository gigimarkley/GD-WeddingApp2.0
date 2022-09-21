import React from 'react';
import {pageTitle, photosPageSubtitles} from '../styling'
import backgroundImage from '../images/background.png'

function Photos() {
    return (
        <div style={{alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
        <h1 style={pageTitle}>Photos</h1>
            <h2 style={photosPageSubtitles}>The Markley-Kerr Family</h2>
                <p>pictures of the cats and us</p>
            <h2 style={photosPageSubtitles}>Wedding Day Pictures</h2>
                <p>insert dropbox link</p>
        </div>
    );
}

export default Photos;