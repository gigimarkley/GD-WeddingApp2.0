import React from 'react';
import {pageTitle, text, pageContainerSm, detailPageSubtitles2, mobilePageStyle, pageContainerMd} from '../styling'

function Gifts() {
    return (
        <div style={(window.innerWidth <= 800)?(mobilePageStyle):(pageContainerMd)}>  
            <h1 style={pageTitle}>Gifts</h1>
            <p  style={text}>
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift would be greatly appreciated.
            </p>
            <p style={text}>Venmo @Gillian-Markley or @Daniel-Kerr-4</p>
        </div>
    );
}

export default Gifts;