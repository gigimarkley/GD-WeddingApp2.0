import React from 'react';
import ElopementDetails from '../components/Elopement';
import ElopementDinnerDetails from '../components/ElopementDinner';
import DayBeforeSchedule from '../components/DayBeforeDetails';
import DayOfSchedule from '../components/DayOfSchedule';
import {detailsContainers, 
    pageTitle, 
    detailPageSubtitles, 
    text, 
    detailsAdminContainer} from '../styling'

function Details() {
    return (
        <div style={detailsAdminContainer}> 
            {/* Display for family */}
            <ElopementDetails/>
            
            {/* Display for family and wedding party */}
            <ElopementDinnerDetails/>

            {/* Display for wedding party */}
            <DayBeforeSchedule/>

            {/* Display for family and wedding party */}
            <DayOfSchedule/>
            
            {/* Display for all */}
            <div style={detailsContainers}>
            <h1  style={pageTitle}>Wedding Reception</h1>
                <h4 style={detailPageSubtitles}>Date/Time</h4>
                    <p style={text}>Thursday, October 7th, 2023 at 5 PM</p>
                <h4 style={detailPageSubtitles}>Location</h4>
                    <p style={text}>The Garner House in Claremont, CA</p> 
                    <p>insert google maps widget</p>
                <h4 style={detailPageSubtitles}>Attire</h4>
                    <p style={text}>Semi-Formal</p>
                    <p>insert weather forecast widget</p>
            </div>
            
        </div>
    );
}

export default Details;