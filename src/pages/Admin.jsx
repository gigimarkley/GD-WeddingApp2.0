import React from 'react';
import {pageTitle, pageContainers} from '../styling'

function Admin() {
    return (
        <div style={pageContainers}>
            <h1 style={pageTitle}>Admin Page</h1>
            <p>Insert guest information and stuff</p>
        </div>
    );
}

export default Admin;