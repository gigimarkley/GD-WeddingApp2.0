import React from 'react';
import {pageTitle, pageContainerLg, pageContainerXl} from '../styling'
import placeholderpic from '../images/placeholderpic.png'
import StoryCard from '../components/StoryCard';

const cardInformation = [
{"date": 'September 8th, 2018', 'description': 'Started talking on the Bumble app', 'pic': placeholderpic },
{"date": 'September 30th, 2018', 'description': 'First date at the Westfield Mall in Valencia', 'pic': placeholderpic },
{"date": 'March 22nd, 2019', 'description': 'Daniel got his Masters from UCLA', 'pic': placeholderpic },
{"date": 'June 22nd, 2019', 'description': 'We moved in to an apartment together', 'pic': placeholderpic },
{"date": 'March 5th, 2020', 'description': 'We adopted Hades', 'pic': placeholderpic },
{"date": 'June 4th, 2021', 'description': 'We adopted Mara', 'pic': placeholderpic },
{"date": 'December 8th, 2021', 'description': 'Gillian became a software engineer', 'pic': placeholderpic },
{"date": 'March 12th, 2022', 'description': 'We got engaged', 'pic': placeholderpic },
{"date": 'April 17th, 2022', 'description': 'We bought a house', 'pic': placeholderpic },
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