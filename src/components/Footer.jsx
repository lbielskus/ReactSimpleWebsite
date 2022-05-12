import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">RECEIVE OUR NEWSLETTER!</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about-us">About Us</Link>
            <Link to="/">Whitepaper</Link>
            <Link to="/">Roadmap</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Partners</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Tutorials</h2>
            <Link to="/">How to Buy</Link>
            <Link to="/">How to Earn</Link>
            <Link to="/">How to transfer</Link>
            <Link to="/">Set Up your wallet</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>

            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Medium</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              React.js
              <img src={logo} alt="logo-react" width="70" />
            </Link>
          </div>
          <small className="website-rights">
            Created by L. Bielskus © 2022
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link Telegram"
              href="/"
              target="_blank"
              aria-label="Telegram"
            >
              <i class="fab fa-telegram-plane"></i>
            </a>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link medium"
              to="/"
              target="_blank"
              aria-label="Medium"
            >
              <i class="fab fa-medium"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
