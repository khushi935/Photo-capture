import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

export default function navbar() {
    return (
        <div className="navbar">
			<h1>Choose the option:-</h1>
            <Link className="Camera" to="/camera">
				Camera
			</Link>
			<Link className="Video" to="/video">
				Video
			</Link>
        </div>
    )
}
