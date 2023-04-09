import React, {useState, useEffect} from 'react'
import { PickerOverlay } from 'filestack-react';

const Upload = () => {
    const [showPicker, setShowPicker] = useState (false); //to show or not show filestack model
  const [uploadHistory, setUploadHistory] = useState ([]);

  // Load upload history from local storage on component mount
  useEffect (() => {
    const history = JSON.parse (localStorage.getItem ('uploadHistory')) || [];
    setUploadHistory (history);
  }, []);

  function handleClick () {
    setShowPicker (prevState => !prevState);
  }

  function handleDelete (handle) {
    const updatedHistory = uploadHistory.filter (
      upload => upload.handle !== handle
    );
    localStorage.setItem ('uploadHistory', JSON.stringify (updatedHistory));
    setUploadHistory (updatedHistory);
  }

  function handleUploadDone (res) {
    // Save upload handle to local storage
    const updatedHistory = [...uploadHistory];
    res.filesUploaded.map (file => {
      const newUpload = {
        handle: file.handle,
        fileName: file.filename,
        timestamp: new Date ().toLocaleString (),
        encrypted: false,
      };
      updatedHistory.push (newUpload);
    });
    localStorage.setItem ('uploadHistory', JSON.stringify (updatedHistory));
    setUploadHistory (updatedHistory);
    setShowPicker (false);
  }
  return (
    <>
    <div className='main-upload'>
    <div id='upload'>
      <button className="upload-button" onClick={handleClick}>
        Upload
      </button></div>

      <div className="upload-history">
        <h3>Upload history:</h3>
        {uploadHistory.length === 0 && <p>No files have been uploaded yet</p>}
        <ul>
          {uploadHistory.map (upload => (
            <li key={upload.handle}>
              <span>{upload.fileName}</span>
              <span>{upload.timestamp}</span>
              <button
                className="upload-history-button"
                onClick={() =>
                  window.open (
                    `https://cdn.filestackcontent.com/${upload.handle}`
                  )}
              >
                Download
              </button>

              <button
                className="delete-history-button"
                onClick={() => handleDelete (upload.handle)}
              >
                Delete
              </button>

            </li>
          ))}
        </ul>
      </div>

      {showPicker &&
        <PickerOverlay
          apikey={'AlxtD35dMQ3qKsX9n3kFyz'}
          onUploadDone={res => {
            console.log (res);
            handleUploadDone (res);
          }}
        />} 

        </div>

    </>

  )
}

export default Upload;