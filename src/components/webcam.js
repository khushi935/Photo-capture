import React from 'react';
import Webcam from "react-webcam";
import "../App.css";
import FileSaver from 'file-saver';

const WebcamComponent = () => {
const webcamRef = React.useRef(null);
const [imgSrc, setImgSrc] = React.useState(null);

const capture = React.useCallback( () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
}, 
[webcamRef, setImgSrc]
);
const download = React.useCallback(() => {
      const blob = new Blob([setImgSrc], {
          type: "image/jpeg/png"
      });
      console.log(blob)
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "capture.png";
      a.click();
      // window.URL.revokeObjectURL(url);
  });
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}
return (
  <div className="webcam">
    <Webcam audio={false} ref={webcamRef} width="40%" screenshotFormat="image/jpeg/png"/>
    <button className="capture" onClick={capture}>Capture<br></br> photo</button>
    {imgSrc && ( <img src={imgSrc} /> )}
    <button className="download" onClick={download}>Download</button>
  </div>
);
};


export default WebcamComponent;