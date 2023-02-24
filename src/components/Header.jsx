import React from 'react';
import {colors, homeNamesMobile, homeDetails, homeAndMobile, homeNamesWeb, homeDetailsMobile} from '../styling'
import { Container } from 'reactstrap';
import flowerBorder from '../images/flower-border.png'


function Header() {
    return (
        <div style={{alignItems: 'center', paddingTop: '30px', paddingBottom: '1px', width: '100%', backgroundColor: colors.lightMedBlue}}>
                <>
                    <Container style={{alignItems: 'center', textAlign: 'center'}}>
                        <img src={flowerBorder}  alt="logo" style={{width: '100%', height: '10%', objectFit: 'cover'}}></img>
                    </Container>
                    <Container style={{ marginTop: '20px', alignItems: 'center'}}>
                        <h6 style={homeDetailsMobile}>September 30th, 2023 in Claremont, CA</h6>
                    </Container>
                </>
        </div>
    );
}

export default Header;