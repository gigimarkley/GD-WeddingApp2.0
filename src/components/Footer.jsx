import React from 'react';
import {colors, fonts} from '../styling'


function Footer() {
    return (
        <div style={{textAlign: 'center', display: 'block', width: '100%', padding: 30, backgroundColor: colors.dustyBlue}}>
            <h3 style={{color: colors.lace,fontFamily: fonts.MeowScript}}>
                This website was made with love by Gillian
            </h3>
        </div>
    );
}

export default Footer;