import React from 'react';
import {pageTitle, text} from '../styling'
import backgroundImage from '../images/background.png'

function Gifts() {
    return (
        <div style={{alignItems: 'center', textAlign: 'center', height: '2000px', backgroundImage: `url(${backgroundImage})` }}>
            <h1 style={pageTitle}>Gifts</h1>
            <p  style={text}>
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift would be greatly appreciated.
            </p>
            <p>insert venmo handle here</p>
        </div>
    );
}

export default Gifts;