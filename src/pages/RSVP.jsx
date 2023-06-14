import React from "react";
import { colors, mobilePageStyle, pageContainerMd } from "../styling";

function RSVP() {

    return (
        <div style={(window.innerWidth <= 800)?(mobilePageStyle):(pageContainerMd)}>  
            <iframe title="RSVP" src="https://docs.google.com/forms/d/e/1FAIpQLSeOhmnwQKO5kS8-FbV3S08ODP1e9EZiLc8VcHQDFE_JBDqCIA/viewform?embedded=true" width="100%" height="1350px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
    );
}

export default RSVP;