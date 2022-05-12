import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GitHub
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          React
        </Button>
      </div>
      <h2>Simple Website</h2>
      <p>Created using React.js</p>
    </div>
  );
}

export default HeroSection;
