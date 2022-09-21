import React from 'react';
import {pageTitle, detailPageSubtitles, text} from '../styling'

function ElopementDetails() {
    return (
        <div style={{paddingTop:'30px'}}>
            <h1 style={pageTitle}>Elopement</h1>
                <h4 style={detailPageSubtitles}>Date/Time</h4>
                    <p style={text}>Thursday, October 5th, 2023 at 3 PM</p>
                <h4 style={detailPageSubtitles}>Location</h4>
                    <p style={text}>Pasadena City Hall, Pasadena, CA</p> 
                    <p>insert google maps widget</p>
                <h4 style={detailPageSubtitles}>Attire</h4>
                    <p style={text}>Smart Casual</p>
                    <p>insert weather forecast widget</p>
        </div>
    );
}

export default ElopementDetails;