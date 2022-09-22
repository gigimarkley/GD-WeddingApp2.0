import React from 'react';
import {pageTitle, photosPageSubtitles, pageContainers} from '../styling'

function Photos() {
    return (
        <div style={pageContainers}>
        <h1 style={pageTitle}>Photos</h1>
            <h2 style={photosPageSubtitles}>The Markley-Kerr Family</h2>
                <p>pictures of the cats and us</p>
            <h2 style={photosPageSubtitles}>Wedding Day Pictures</h2>
                <p>insert dropbox link</p>
        </div>
    );
}

export default Photos;