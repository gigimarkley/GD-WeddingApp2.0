// import backgroundImage from './images/background.png'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const colors = {
    lace : '#FFF8EB', 
    lightBeige : "#FFE1AD",
    beige : "#d4b37fff", 

    lightGreen : "#b9d1baff",
    mediumGreen : "#5E945D",
    darkGreen : "#035600",

    // D4E9FF light blue
    // 9FC2E8 light medium blue
    // #7AB0EB medium blue
    // 427ACE dark medium blue
    //315AA5 dark blue
    //15265E navy blue
    lightBlue :"#D4E9FF",
    lightMedBlue : "#9FC2E8",
    mediumBlue : "#7AB0EB", 
    darkMedBlue: "#427ACE",
    darkBlue:"#315AA5",
    navyBlue : "#15265E",
}

export const fonts = {
    MsMadi:'Ms Madi',
    AmaticSC: 'Amatic SC',
    MeowScript: 'Meow Script',
    ShadowsIntoLightTwo: 'Shadows Into Light Two',
    Montserrat: 'Montserrat'
}

//Used across site
export const pageTitle = { 
    color: colors.navyBlue,
    fontFamily: fonts.Montserrat,
    padding: '20px'
}

export const text = {
    color: colors.mediumGreen,
    fontFamily: fonts.Montserrat
}

export const navTabs = {
    color: colors.lace,
    fontFamily: fonts.Montserrat,
}

export const NavLink = styled(Link)`
    color: ${colors.lightBlue};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: ${colors.darkMedBlue};
    }
    `;

export const pageContainerWithHeight = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '2000px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const pageContainerNoHeight = {
    alignItems: 'center', 
    textAlign: 'center', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const pageContainer600Height = {
    alignItems: 'center', 
    textAlign: 'center', 
    // backgroundImage: `url(${backgroundImage})`,
    height: '600px',
    backgroundColor: colors.lightBlue
}

export const pageContainerXl = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '3300px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const pageContainerLg = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '1700px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const pageContainerMd = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '1200px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const pageContainerSm = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '800px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

// Home Page
export const homeNamesWeb = {
    color: colors.navyBlue,
    fontFamily: fonts.MeowScript,
    fontSize: '6vw',
    textAlign: 'center',
}
export const homeNamesMobile = {
    color: colors.navyBlue,
    fontFamily: fonts.MeowScript,
    fontSize: '300%',
    textAlign: 'center',
}

export const homeAndMobile = {
    color: colors.navyBlue,
    fontFamily: fonts.MeowScript,
    fontSize: '200%',
    textAlign: 'center',
    margin:'-10px'
}

export const homeDetails = {
    color: colors.lace,
    fontFamily: fonts.Montserrat,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '2vw',
}

export const homeDetailsMobile = {
    color: colors.lace,
    fontFamily: fonts.Montserrat,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '3vw',
}


export const countdownTitle = {
    color: colors.navyBlue,
    fontFamily: fonts.Montserrat,
    fontSize: '150%',
    alignItems: 'center',
    textAlign: 'center',
}

export const countdownBody = {
    color: colors.mediumBlue,
    fontFamily: fonts.Montserrat,
    alignItems: 'center',
    textAlign: 'center', 
}

export const countdownContainer = {
    alignItems: 'center',
    padding: '10px'
}

//Our Story
export const storyCard = {
    alignItems: 'center', 
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontFamily: fonts.Montserrat,
    margin:'20px'
}

export const testPillLeft = {
    alignItems: 'center', 
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontFamily: fonts.Montserrat,
    margin:'20px'
}

export const testpillRight = {
    alignItems: 'center', 
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontFamily: fonts.Montserrat,
    margin:'20px'

}

//Used on Details Page
export const detailPageSubtitles = { 
    color: colors.darkGreen,
    fontFamily: fonts.Montserrat
}

export const detailPageSubtitles2 = { 
    color: colors.mediumBlue,
    fontFamily: fonts.Montserrat
}

export const detailsContainers = {
    paddingTop:'30px'
}

export const detailsAdminContainer = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '3000px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const detailsFamilyContainer = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '2400px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
}

export const detailsWeddingPartyContainer = {
    alignItems: 'center', 
    textAlign: 'center', 
    height: '2600px', 
    // backgroundImage: `url(${backgroundImage})`
    backgroundColor: colors.lightBlue
    
}


//Wedding Party Page
export const weddingPartyNames = { 
    color: colors.lace,
    fontFamily: fonts.MeowScript,
}

export const weddingPartyCards = { 
    width:'40vw',
    backgroundColor: colors.navyBlue
}

export const weddingPartyDescription = {
    color: colors.lightBlue,
    fontFamily: fonts.Montserrat,
    fontSize: '15px'
}

export const weddingPartyRow = {
    paddingBottom:'25px'
}

//Photos Page
export const photosPageSubtitles = { 
    color: colors.mediumGreen,
    fontFamily: fonts.Montserrat 
}

//RSVP Page
export const rsvpPageSubtitles = { 
    color: colors.mediumGreen,
    fontFamily: fonts.Montserrat 
}


