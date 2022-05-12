import React from "react";
import "./Intro.css";
import Reactlogo from "../Assets/reactlogo.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Building user interfaces</h2>
          <h1 className="i-name">What is React.js?</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Javascript library</div>
              <div className="i-title-item">
                Tool for building UI components
              </div>
            </div>
          </div>
          <div className="i-desc">
            <p>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
            <p>
              Declarative views make your code more predictable and easier to
              debug.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Reactlogo} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
