import React from "react";
import "./Service.css";
const Services = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <section id="service" className="service section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row ">
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-solid fa-pen-nib"></i>
                </div>
                <h4>Web Design</h4>
                <p>
                  My design philosophy revolves around putting the user first. I
                  focus on creating interfaces that not only look visually
                  appealing but also ensure a smooth and intuitive navigation
                  experience, enhancing user engagement and satisfaction.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <h4>Web Developement</h4>
                <p>
                  Proficient in the MERN stack - MongoDB, Express.js, React, and
                  Node.js . I have honed my skills in both front-end and
                  back-end development. My experience includes architecting
                  scalable and responsive web applications.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code"></i>
                </div>
                <h4>Data Structures</h4>
                <p>
                  My expertise extends beyond the development realm,
                  encompassing a strong grasp of fundamental data structures.
                  This knowledge allows me to optimize algorithms, design
                  efficient solutions, and tackle complex programming challenges
                  with confidence and precision.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className=" fa-mobile-alt fa"></i>
                </div>
                <h4>App Development</h4>
                <p>
                  Skilled in leveraging the power of React Native, I excel in
                  developing robust and scalable mobile applications that
                  seamlessly run across multiple platforms. My expertise extends
                  to harnessing React Native's capabilities to create intuitive
                  user interfaces and high-performance apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
