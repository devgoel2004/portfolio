import React from "react";
import "./Projects.css";
import chat from "../../assets/Chat.jpg";
import restaurant from "../../assets/Restaurant.png";
import weather from "../../assets/Weather.jpg";
import wea from "../../assets/Weather.png";
import stackoverflow from "../../assets/stackoverflow.png";
const Projects = () => {
  return (
    <>
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading">
              <h2>My Last Projects :</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/stackoverflow-frontend/"
                  target="_blank">
                  <img src={stackoverflow} alt="chat" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/Website-Restaurant/"
                  target="_blank">
                  <img src={restaurant} alt="Restaurant" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/weather-app-react/"
                  target="_blank">
                  <img src={weather} alt="Weather" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/weather-app-react/"
                  target="_blank">
                  <img src={wea} alt="Weather" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <a href="https://letschat-n5lo.onrender.com/" target="_blank">
                  <img src={chat} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
