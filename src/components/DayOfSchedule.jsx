import React from 'react';
import {pageTitle, detailPageSubtitles, text} from '../styling'

function DayOfSchedule() {
    return (
        <>
            <h1 style={pageTitle}>The Day Of Details</h1>
                <h4 style={detailPageSubtitles}>Attire</h4>
                    <p style={text}>Smart Casual</p>
                    <p>insert weather forecast widget</p>
                <h4 style={detailPageSubtitles}>Directions</h4>
                    <p style={text}>insert venue address</p> 
                    <p>insert google maps widget</p>
        </>
    );
}

export default DayOfSchedule;