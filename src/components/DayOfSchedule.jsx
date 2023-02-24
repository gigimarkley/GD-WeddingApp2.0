import React from 'react';
import {detailsContainers, pageTitle, detailPageSubtitles, text, detailPageSubtitles2} from '../styling'

function DayOfSchedule() {
    return (
        <div style={detailsContainers}>
            <h1 style={pageTitle}>Day Of the Reception</h1>
                <h3 style={detailPageSubtitles2}>More Prep</h3>
                    <h5 style={detailPageSubtitles}>Date/Time</h5>
                        <p style={text}>Friday, September 30th, 2023 at 9 AM</p>
                    <h5 style={detailPageSubtitles}>Location</h5>
                        <p style={text}>Our House, 772 W 1st St, Claremont, CA</p> 
                        <p>insert google maps widget</p>
                    <h5 style={detailPageSubtitles}>Volunteers</h5>
                        <p style={text}>Person & Person: Bring cake to the venue</p>
                        <p style={text}>Person & Person: Set up decor at the venue</p>
                        <p style={text}>Person & Person: Set up food at the venue</p>
                        <p style={text}>Person & Person: Set up activities at the venue</p>
                <h3 style={detailPageSubtitles2}>Family & Wedding Party Pictures</h3>
                    <h5 style={detailPageSubtitles}>Date/Time</h5>
                        <p style={text}>Friday, October 6th, 2023 at 3 PM</p>
                    <h5 style={detailPageSubtitles}>Location</h5>
                        <p style={text}>California Botanic Gardens, Claremont, CA</p> 
                        <p>insert google maps widget</p>
                    <h5 style={detailPageSubtitles}>Attire</h5>
                        <p style={text}>Semi-Formal, blue preferred, florals encouraged</p>
                        <p>insert weather forecast widget</p>
        </div>
    );
}

export default DayOfSchedule;