import React from 'react';
import {pageTitle} from '../styling'
import backgroundImage from '../images/background.png'

function Admin() {
    return (
        <div style={{alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
            <h1 style={pageTitle}>Admin Page</h1>
            <p>Insert guest information and stuff</p>
        </div>
    );
}

export default Admin;