import React from 'react';
import aboutUsImage from '../images/gd-aboutus.png'
import Countdown from '../components/Countdown';



function Home() {
    return (
        <>  
          
            <img src={aboutUsImage}  alt="logo" width="40%" height="40%" />
            <h1>Gillian Cabalquinto Markley and Daniel Hunter Kerr</h1>
            <h4>October 7th, 2023</h4>
            <h4>Claremont, CA</h4>
       
            <Countdown/>
        </>
      
    );
}

export default Home;