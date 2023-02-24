import React from 'react';
import ElopementDetails from '../components/Elopement';
import ElopementDinnerDetails from '../components/ElopementDinner';
import DayBeforeSchedule from '../components/DayBeforeDetails';
import DayOfSchedule from '../components/DayOfSchedule';
import {detailsContainers, 
    pageTitle, 
    detailPageSubtitles, 
    text, 
    detailsAdminContainer, pageContainer600Height, pageContainerMd, detailPageSubtitles2} from '../styling'
import attireIdeas from '../images/attire-ideas.png'

function Details() {
    return (
        <div  style={detailsAdminContainer}> 
            <div style={detailsContainers}>
            <h1  style={pageTitle}>Wedding Reception</h1>
                <h5 style={text}>We will be having a tea party lunch at the Garner House courtyard to celebrate our wedding. The venue will be outdoors, so please dress accordingly!</h5>
                <h4 style={detailPageSubtitles}>Date/Time</h4>
                    <p style={text}>Thursday, September 30th, 2023 at 11 AM</p>
                <h4 style={detailPageSubtitles}>Location</h4>
                    <p style={detailPageSubtitles2}>The Garner House</p> 
                    <p style={text}>840 N Indian Hill Blvd, Claremont, CA 91711</p> 
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20garner%20house&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                <h4 style={detailPageSubtitles}>Attire</h4>
                    <p style={detailPageSubtitles2}>Semi-Formal</p>
                    <p style={text}>One of the things that brings a lot of joy to Gigi is fashion. So we are asking that you please wear your best afternoon tea party attire. Florals and glitter are encouraged. Extra points for fun headwear! Have fun with your outfit! :)</p>
                    <img src={attireIdeas}  alt="attireIdeas" style={{width: '100%'}}/>
                <h4 style={detailPageSubtitles}>Travel</h4>
                    <p style={text}>Ontario International Airport, Ontario, CA 91761
                        <br></br>(about a 20 minute drive from Claremont)</p>
                    <p style={text}>Hollywood Burbank Airport, Burbank, CA 91505
                        <br></br>(about a 45 minute drive from Claremont)</p>
                    <p style={text}>Los Angeles International Airport, Los Angeles, CA 90045
                        <br></br>(about an hour drive from Claremont)</p>
                <h4 style={detailPageSubtitles}>Accommodations</h4>
                    <p style={text}> DoubleTree by Hilton Hotel Claremont, 555 W Foothill Blvd, Claremont, CA 91711</p> 
                    <p style={text}>Hotel Casa 425 + Lounge, West 1st Street, Claremont, CA</p> 
                <h4 style={detailPageSubtitles}>Things to do in the area</h4>
                    
                        <h6 style={detailPageSubtitles2}>Visit the Claremont Village: </h6>
                            <p style={text}>The Claremont Village is a charming downtown area with shops, restaurants, and galleries. It's a great place to wander around, grab a bite to eat, and do some shopping.</p>
                        <h6 style={detailPageSubtitles2}>Visit the Botanic Gardens: </h6>
                            <p style={text}>The Rancho Santa Ana Botanic Garden is located in Claremont and is home to a variety of native plants and flowers, making it a great place to explore and take in the natural beauty of the area</p>
                        <h6 style={detailPageSubtitles2}>Take a hike in the San Gabriel Mountains: </h6>
                            <p style={text}>The San Gabriel Mountains are located just north of Claremont and offer a variety of hiking trails for all skill levels. Some popular trails include the Icehouse Canyon Trail, the Claremont Hills Wilderness Park, and the Mount Baldy Summit Trail</p>
                        <h6 style={detailPageSubtitles2}>Stroll through Old Town Pasadena: </h6>
                            <p style={text}>Old Town Pasadena is a charming shopping and dining district that features a variety of boutique shops, art galleries, and restaurants</p>
                        <h6 style={detailPageSubtitles2}>Visit the Huntington Library, Art Museum, and Botanical Gardens: </h6>
                            <p style={text}>The Huntington is a beautiful estate that features a library, art museum, and botanical gardens, making it a great place to spend an afternoon</p>
                        <h6 style={detailPageSubtitles2}>Go shopping: </h6>
                            <p style={text}>The Ontario Mills shopping mall is located just a short drive from Claremont and offers a wide range of shops and restaurants, as well as a movie theater</p>
                        <h6 style={detailPageSubtitles2}>Visit the museums: </h6>
                            <p style={text}>The Los Angeles area is home to a number of museums, including the Getty Center, the Los Angeles County Museum of Art, and the Museum of Contemporary Art</p>
                        <h6 style={detailPageSubtitles2}>Visit the nearby cities: </h6>
                            <p style={text}>Los Angeles, Hollywood, and Disneyland are all within driving distance of Claremont and offer a wide range of activities, including theme parks, movie studios, and museums</p>
                    
            </div>
        </div>
    );
}

export default Details;