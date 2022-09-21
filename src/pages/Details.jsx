import React from 'react';
import ElopementDetails from '../components/Elopement';
import ElopementDinnerDetails from '../components/ElopementDinner';
import DayBeforeSchedule from '../components/DayBeforeDetails';
import DayOfSchedule from '../components/DayOfSchedule';

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
            <h1>Wedding Reception Details</h1>
                <h4>Attire</h4>
                    <p>Semi-formal</p>
                    <p>insert weather forecast widget</p>
                <h4>Directions</h4>
                    <p>insert venue address</p> 
                    <p>insert google maps widget</p>


        </>
    );
}

export default Details;