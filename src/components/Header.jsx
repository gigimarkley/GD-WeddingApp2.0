import React from 'react';
import {colors, homeNamesMobile, homeDetails, homeAndMobile, homeNamesWeb, homeDetailsMobile} from '../styling'
import { Container } from 'reactstrap';


function Header() {
    return (
        <div style={{alignItems: 'center', paddingTop: '30px', paddingBottom: '1px', width: '100%', backgroundColor: colors.dustyBlue}}>
            {(window.innerWidth >= 800)?(
                <>
                    <Container>
                        <h1 style={homeNamesWeb}> Gillian Markley + Daniel Kerr </h1>
                    </Container>
                    <Container style={{ marginTop: '20px', alignItems: 'center'}}>
                        <h6 style={homeDetails}>October 7th, 2023 in Claremont, CA</h6>
                    </Container>
                </>
            ):(
                <>
                    <Container style={{alignItems: 'center', textAlign: 'center'}}>
                        <h1 style={homeNamesMobile}> Gillian Markley</h1>
                        <h1 style={homeAndMobile}>&</h1>
                        <h1 style={homeNamesMobile}>Daniel Kerr</h1>
                    </Container>
                    <Container style={{ marginTop: '20px', alignItems: 'center'}}>
                        <h6 style={homeDetailsMobile}>October 7th, 2023 in Claremont, CA</h6>
                    </Container>
                </>
            )}  

           
        </div>
    );
}

export default Header;