import React from 'react';
import {pageTitle, photosPageSubtitles, pageContainerSm, pageContainerMd, mobilePageStyle} from '../styling'
import GoogleDriveImages from '../components/GoogleDriveImages';

function Photos() {
    return (
        <div style={(window.innerWidth <= 800)?(mobilePageStyle):(pageContainerMd)}>  
        <h1 style={pageTitle}>Photos</h1>
            <h2 style={photosPageSubtitles}>The Markley-Kerr Family</h2>
                <a href="https://drive.google.com/drive/u/0/folders/1sMAydcwsMgPoxaxnPgL-NO2ATQfYz-BJ" target="_blank" rel="noopener noreferrer">
                    View more photos on Google Drive
                </a>
                <GoogleDriveImages folderId="1sMAydcwsMgPoxaxnPgL-NO2ATQfYz-BJ" />


            <h2 style={photosPageSubtitles}>Wedding Day Pictures - March 18th, 2023</h2>
                <a href="https://drive.google.com/drive/u/0/folders/1qQx2x5HzlaRjN9EWnZK5FKqK0yPhGdqs" target="_blank" rel="noopener noreferrer">
                    View Wedding Day Pictures Google Drive
                </a>
                <GoogleDriveImages folderId="1qQx2x5HzlaRjN9EWnZK5FKqK0yPhGdqs" />


 
            <h2 style={photosPageSubtitles}>Reception Day Pictures - September 30th, 2023</h2>
                <h6>Feel free to add pictures to the Google Drive link below for everyone to enjoy!</h6>
                <a href="https://drive.google.com/drive/u/0/folders/11PPUs9uJT7MWfT8jw4sCEkZz6-84uQ_J" target="_blank" rel="noopener noreferrer">
                    View Reception Day Pictures Google Drive Folder
                </a>
                <GoogleDriveImages folderId="11PPUs9uJT7MWfT8jw4sCEkZz6-84uQ_J" />

                
        </div>
    );
}

export default Photos;



