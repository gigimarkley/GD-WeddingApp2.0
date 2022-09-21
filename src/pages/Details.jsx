import React from 'react';
import ElopementDetails from '../components/Elopement';
import ElopementDinnerDetails from '../components/ElopementDinner';
import DayBeforeSchedule from '../components/DayBeforeDetails';
import DayOfSchedule from '../components/DayOfSchedule';
import {pageTitle, detailPageSubtitles, text} from '../styling'

function Details() {
    return (
        <>
            {/* Display for family */}
            <ElopementDetails/>
            {/* Display for family and wedding party */}
            <ElopementDinnerDetails/>
            {/* Display for wedding party */}
            <DayBeforeSchedule/>
            {/* Display for family and wedding party */}
            <DayOfSchedule/>
            {/* Display for all */}
            <h1  style={pageTitle}>Wedding Reception Details</h1>
                <h4 style={detailPageSubtitles}>Attire</h4>
                    <p  style={text}>Semi-formal</p>
                    <p>insert weather forecast widget</p>
                <h4 style={detailPageSubtitles}>Directions</h4>
                    <p  style={text}>insert venue address</p> 
                    <p>insert google maps widget</p>


        </>
    );
}

export default Details;