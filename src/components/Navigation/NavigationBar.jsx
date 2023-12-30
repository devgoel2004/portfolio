import React from "react";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>D</span>evCraft
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#home">
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#service">
            <i className="fa fa-list"></i>Services
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="fa fa-briefcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa fa-comments"></i>Contacts
          </a>
        </li>
        <li>
          <a href="#testimonial">
            <i className="fa  fa-quote-left"></i>Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
