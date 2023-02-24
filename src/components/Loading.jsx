import React from 'react';
import catloader from '../images/cat-loader.png'
import '.././Loading.css';

function Loading() {
    return (
        <div class="spinner">
            <img src={catloader} className="Loading-Component" alt="loading" />
        </div>
    );
}

export default Loading;
