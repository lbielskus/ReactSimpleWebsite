import React from "react";
import "./About.css";
import about from "../Assets/me.png";
import Contacts from "../Assets/aboutcontacts.png";

function About() {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p>
          I see the developer's work as a constant search for new information,
          therefore, I accept new challenges as a tool for personal improvement,
          which I believe is necessary to achieve yet undiscovered results. I
          believe that programming and related technologies are the future for
          all of us. If you want to assess my skills more accurately and decide
          if my work would meet your expectations, I suggest you to visit my
          GitHub repositories.
        </p>

        <p className="a-desc"></p>
        <div className="a-ca">
          <img src={Contacts} alt="" className="a-contacts-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
