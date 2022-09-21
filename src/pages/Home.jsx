import React from 'react';
import homeImage from '../images/gd-home.png'
import Countdown from '../components/Countdown';
import {homeNames, homeDetails} from '../styling'



function Home() {
    return (
        <>  
            <img src={homeImage}  alt="logo" width="100%"/>
            <h1 style={homeNames}>Gillian Markley and Daniel Kerr</h1>
            <h4 style={homeDetails}>October 7th, 2023</h4>
            <h4 style={homeDetails}>Claremont, CA</h4>
            
            <Countdown/>
        </>
      
    );
}

export default Home;