import backgroundImage from './images/background.png'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const colors = {
    lace : '#FFF8EB', 
    lightBeige : "#FFE1AD",
    beige : "#d4b37fff", 
    lightGreen : "#b9d1baff",
    mediumGreen : "#5E945D",
    darkGreen : "#035600",
    lightBlue :"#D4E9FF",
    lightMedBlue : "#9FC2E8",
    mediumBlue : "#7AB0EB", 
    darkMedBlue: "#427ACE",
    darkBlue:"#315AA5",
    navyBlue : "#15265E",
    black: "black,"
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
    padding: '20px',
    fontWeight: 'bold'
}

export const text = {
    // color: colors.darkGreen,
    fontWeight: 'bold',
    fontFamily: fonts.Montserrat,
    // backgroundColor: colors.mediumBlue
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

export const mobilePageStyle = {
    alignItems: 'center', 
    textAlign: 'center', 
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: colors.lightBlue,
}

export const mobileHeaderStyle = {
    alignItems: 'center', 
    paddingTop: '30px', 
    paddingBottom: '1px', 
    backgroundColor: colors.lightMedBlue
}

export const mobileHeaderText = {
    marginTop: '20px', 
    alignItems: 'center',
    width: '100%', 
}

export const mobileHeaderImage = {
    alignItems: 'center', 
    textAlign: 'center',
    width: '100%', 
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

export const countdownContainer = {
    alignItems: 'center',
    padding: '10px',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderRadius: '55px',
}
export const countdownBody = {
    color: colors.navyBlue,
    fontFamily: fonts.Montserrat,
    alignItems: 'center',
    textAlign: 'center', 
}

//Our Story
export const storyCardMobile = {
    alignItems: 'center', 
    textAlign: 'center',
    backgroundColor: colors.mediumBlue,
    borderColor: 'transparent',
    fontFamily: fonts.Montserrat,
    paddingTop: '20px',
    paddingBottom: '20px',
    borderRadius: '55px',
    margin: '20px',
}


//Used on Details Page
export const detailPageSubtitles = { 
    color: colors.darkBlue,
    fontFamily: fonts.Montserrat,
}

export const detailPageSubtitles2 = { 
    color: colors.darkMedBlue,
    fontFamily: fonts.Montserrat,
    fontStyle: 'italic',
    fontWeight: 'bold'
}

export const detailPageText = {
    color: colors.darkGreen,
    fontFamily: fonts.Montserrat,
}

export const detailsContainers = {
    // paddingTop:'30px',
}

export const mobilePageStyleDetails = {
    alignItems: 'center', 
    textAlign: 'center', 
    backgroundColor: colors.lightBlue,
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
    color: colors.darkGreen,
    fontFamily: fonts.Montserrat,
    marginTop: '20px'
}

export const photoSampleSetContainer = {
    backgroundColor:colors.darkMedBlue,
    width: '100%'
}

export const photoContainer = {
    width:'100%', 
    borderRadius:'5px',
    margin: '5px',
    objectFit: 'fill'
}

//RSVP Page
export const rsvpPageSubtitles = { 
    color: colors.mediumGreen,
    fontFamily: fonts.Montserrat 
}


