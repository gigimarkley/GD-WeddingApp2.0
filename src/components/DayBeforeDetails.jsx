import React from 'react';
import {detailsContainers, pageTitle, detailPageSubtitles, text, detailPageSubtitles2} from '../styling'

function DayBeforeSchedule() {
    return (
        <div style={detailsContainers}>
            <h1 style={pageTitle}>Day Before the Reception</h1>
                <h3 style={detailPageSubtitles2}>Tea Party Brunch</h3>
                    <h5 style={detailPageSubtitles}>Date/Time</h5>
                        <p style={text}>Friday, October 6th, 2023 at 12 PM</p>
                    <h5 style={detailPageSubtitles}>Location</h5>
                        <p style={text}>Fancy Tea Place, 123 St, Pasadena, CA</p> 
                        <p>insert google maps widget</p>
                    <h5 style={detailPageSubtitles}>Attire</h5>
                        <p style={text}>Smart Casual</p>
                        <p>insert weather forecast widget</p>
                <h3 style={detailPageSubtitles2}>Reception Prep & Games</h3>
                    <h5 style={detailPageSubtitles}>Date/Time</h5>
                        <p style={text}>Friday, October 6th, 2023 at 2 PM</p>
                    <h5 style={detailPageSubtitles}>Location</h5>
                        <p style={text}>Our house, 772 W 1st St, Claremont, CA</p> 
                        <p>insert google maps widget</p>
                    <h5 style={detailPageSubtitles}>Attire</h5>
                        <p style={text}>Casual</p>
                        <p>insert weather forecast widget</p>
        </div>
    );
}

export default DayBeforeSchedule;