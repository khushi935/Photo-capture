import React, { useState } from 'react';
import Webcam from "react-webcam";
import "../App.css"
 
const WebcamVedio = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capture, setCapture] = React.useState(false);
    const [recording, setrecording] = React.useState([]);

    const statcapturing = React.useCallback(() => {
        setCapture(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mineType: "vedio/webm"
        });
        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapture, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setrecording((prev) => prev.concat(data));
            }
        }, [setrecording]
    );

    const stopcapturing = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapture(false);
    }, [mediaRecorderRef, webcamRef, setCapture]);

    const download = React.useCallback(() => {
        if (recording.length) {
            const blob = new Blob(recording, {
                type: "vedio/webm/mp4"
            });
            console.log(blob)
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setrecording([]);
        }
    }, [recording]);
    return (
        <div className="webcam">
            <Webcam audio={true} ref={webcamRef} />
            { capture ? (
                <button className="capture"  onClick={stopcapturing}>Stop<br></br>Vedio</button>
            ) : (
                    <button className="capture"  onClick={statcapturing}>Start<br></br>Vedio</button>
                )}
            { recording.length > 0 && (
                <button className="download" onClick={download}>Download<br></br>Vedio</button>
            )}
        </div>
    )
}
export default WebcamVedio;