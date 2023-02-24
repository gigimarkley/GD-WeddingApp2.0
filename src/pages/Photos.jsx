import React from 'react';
import {pageTitle, photosPageSubtitles, pageContainerSm} from '../styling'
import GoogleDriveImages from '../components/GoogleDriveImages';

function Photos() {
    return (
        <div style={pageContainerSm}>
        <h1 style={pageTitle}>Photos</h1>
            <h2 style={photosPageSubtitles}>The Markley-Kerr Family</h2>
                <GoogleDriveImages folderId="1sMAydcwsMgPoxaxnPgL-NO2ATQfYz-BJ" />
                <a href="https://drive.google.com/drive/u/0/folders/1sMAydcwsMgPoxaxnPgL-NO2ATQfYz-BJ" target="_blank" rel="noopener noreferrer">
                    View photos on Google Drive
                </a>

            <h2 style={photosPageSubtitles}>Wedding Day Pictures</h2>
                <GoogleDriveImages folderId="1qQx2x5HzlaRjN9EWnZK5FKqK0yPhGdqs" />
                <h6>Feel free to add pictures to the Google Drive link below for everyone to enjoy!</h6>
                <a href="https://drive.google.com/drive/u/0/folders/1qQx2x5HzlaRjN9EWnZK5FKqK0yPhGdqs" target="_blank" rel="noopener noreferrer">
                    Wedding Day Pictures Google Drive Folder
                </a>


 
            <h2 style={photosPageSubtitles}>Reception Day Pictures</h2>
                <GoogleDriveImages folderId="11PPUs9uJT7MWfT8jw4sCEkZz6-84uQ_J" />
                <h6>Feel free to add pictures to the Google Drive link below for everyone to enjoy!</h6>
                <a href="https://drive.google.com/drive/u/0/folders/11PPUs9uJT7MWfT8jw4sCEkZz6-84uQ_J" target="_blank" rel="noopener noreferrer">
                    Reception Day Pictures Google Drive Folder
                </a>
                
        </div>
    );
}

export default Photos;



