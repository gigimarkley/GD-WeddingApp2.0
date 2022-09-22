import React from 'react';
import {colors, homeNames, homeDetails} from '../styling'
import { Container } from 'reactstrap';


function Header() {
    return (
        <div style={{paddingTop: '30px', paddingBottom: '1px', display: 'block', width: '100%', backgroundColor: colors.dustyBlue}}>
            <Container style={{width:'100%',alignItems: 'center', textAlign: 'center'}}>
                <h1 style={homeNames}> Gillian Markley + Daniel Kerr </h1>
            </Container>

            <Container style={{ marginTop: '20px', alignItems: 'center'}}>
                <h6 style={homeDetails}>{`October 7th, 2023`+ ` `+ `|` +` `+`Claremont, CA`}</h6>
            </Container>
        </div>
    );
}

export default Header;