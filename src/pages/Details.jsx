import React from 'react';
import ElopementDetails from '../components/Elopement';
import ElopementDinnerDetails from '../components/ElopementDinner';
import DayBeforeSchedule from '../components/DayBeforeDetails';
import DayOfSchedule from '../components/DayOfSchedule';
import {pageTitle, detailPageSubtitles, text} from '../styling'
import backgroundImage from '../images/background.png'

function Details() {
    return (
        //Just wedding guests
        // <div style={{ alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
        
        //For family
        // <div style={{ alignItems: 'center', textAlign: 'center', height: '2400px', backgroundImage: `url(${backgroundImage})` }}>

        //For wedding party
        // <div style={{ alignItems: 'center', textAlign: 'center', height: '2600px', backgroundImage: `url(${backgroundImage})` }}>

        // admin
        <div style={{ alignItems: 'center', textAlign: 'center', height: '3000px', backgroundImage: `url(${backgroundImage})` }}> 
            {/* Display for family */}
            <ElopementDetails/>
            
            {/* Display for family and wedding party */}
            <ElopementDinnerDetails/>

            {/* Display for wedding party */}
            <DayBeforeSchedule/>

            {/* Display for family and wedding party */}
            <DayOfSchedule/>
            
            {/* Display for all */}
            <div style={{paddingTop:'30px'}}>
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