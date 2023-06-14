import React from 'react';
import {mobileHeaderStyle, mobileHeaderText, mobileHeaderImage, homeAndMobile, homeNamesWeb, homeDetailsMobile} from '../styling'
import { Container } from 'reactstrap';
import navbarPic from '../images/navbar-pic.png'


function Header() {
    return (
        <div style={mobileHeaderStyle}>
                <>
                    <Container style={mobileHeaderImage}>
                        <img src={navbarPic}  alt="logo" style={{width: '100%', height: '10%', objectFit: 'cover'}}></img>
                    </Container>
                    <Container style={mobileHeaderText}>
                        <h6 style={homeDetailsMobile}>September 30th, 2023 in Claremont, CA</h6>
                    </Container>
                </>
        </div>
    );
}

export default Header;