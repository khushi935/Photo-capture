import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebcamComponent from "./components/webcam";
import WebcamVedio from "./components/webvedio";
import Navbar from "./components/navbar";

function App() {
  return (
    <div >
     			<Router>
             < Navbar />
				<Route path="/camera" exact component={() => <WebcamComponent/>} />
				<Route path="/video" exact component={() => <WebcamVedio />} />
			</Router>
    </div>
  );
}

export default App;
