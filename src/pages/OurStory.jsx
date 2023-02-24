import React from 'react';
import {pageTitle, pageContainerLg, pageContainerXl} from '../styling'
import placeholderpic from '../images/placeholderpic.png'
import StoryCard from '../components/StoryCard';
import mara from '../images/mara.jpeg'
import hades from '../images/hades.JPG'
import softwareengineer from '../images/softwareengineer.jpeg'
import engagement from '../images/engagement.jpeg'
import bumble from '../images/bumble.png'
import house from '../images/house.jpeg'
import malldate from '../images/malldate.jpeg'
import apartment from '../images/apartment.JPG'

const cardInformation = [
{"date": 'September 6th, 2018', 'description': 'Started talking on the Bumble app', 'pic': bumble },
{"date": 'September 30th, 2018', 'description': 'First date at the Westfield Mall in Valencia', 'pic': malldate },
{"date": 'March 22nd, 2019', 'description': 'Daniel got his Masters from UCLA', 'pic': placeholderpic },
{"date": 'June 22nd, 2019', 'description': 'We moved in to an apartment together', 'pic': apartment},
{"date": 'March 5th, 2020', 'description': 'We adopted Hades', 'pic': hades },
{"date": 'June 4th, 2021', 'description': 'We adopted Mara', 'pic': mara },
{"date": 'December 8th, 2021', 'description': 'Gillian became a software engineer', 'pic': softwareengineer },
{"date": 'March 13th, 2022', 'description': 'We got engaged', 'pic': engagement },
{"date": 'April 17th, 2022', 'description': 'We bought a house', 'pic': house },
]

function OurStory() {
    return (
        (window.innerWidth >= 800) ? 
        (
            <div style={pageContainerXl}>
                <h1 style={pageTitle}>Our Story</h1>
                {cardInformation.map((card,i)=> <StoryCard key={i} cardInfo={card}/>)}
            </div>
        ) :
        (
        <div style={pageContainerLg}>
            <h1 style={pageTitle}>Our Story</h1>
            {cardInformation.map((card,i)=> <StoryCard key={i} cardInfo={card}/>)}
        </div>
        )
    );
}

export default OurStory;