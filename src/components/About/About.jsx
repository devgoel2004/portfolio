import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Dev Goel and <span>Web Developer</span>
                  </h3>
                  <p>
                    My name is Dev Goel. As a passionate and results-driven full
                    stack web developer, I specialize in leveraging the power of
                    the MERN stack to create seamless, user-centric
                    applications. With an unwavering dedication to crafting
                    high-quality code and delivering exceptional user
                    experiences, I thrive in the world of web development where
                    innovation meets functionality. Proficient in the MERN stack
                    - MongoDB, Express.js, React, and Node.js - I have honed my
                    skills in both front-end and back-end development.My
                    expertise extends beyond the development realm, encompassing
                    a strong grasp of fundamental data structures. This
                    knowledge allows me to optimize algorithms, design efficient
                    solutions, and tackle complex programming challenges with
                    confidence and precision.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday: <span>12 July 2004</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age: <span>19</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Website:{" "}
                        <span>https://devgoel2004.github.io/portfolio</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span>devgoel901@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>B.Tech (IT)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone: <span>9690011021</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City: <span>Ghaziabad</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        For Hire: <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="https://drive.google.com/file/d/1FhPpAvt9S7Uro9mTotwZGh5FCfBLBBsO/view?usp=sharing"
                        target="_blank"
                        className="btn padd-15">
                        Download CV
                      </a>
                      <a href="#contact" className="btn padd-15">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="titleline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2021-25
                          </h3>
                          <h4 className="timeline-title">
                            B.Tech in Information Technology
                          </h4>
                          <p className="timeline-text">
                            I am persuing my B.Tech from Ajay Kumar Garg
                            Engineering College, Ghaziabad. And scored 8 CGPA in
                            my first year. AKGEC is one of the best college in
                            Ghaziabad and in AKTU university.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2020-21
                          </h3>
                          <h4 className="timeline-title">
                            ClassName 12<sup>th</sup>
                          </h4>
                          <p className="timeline-text">
                            I have done my schooling from Delhi Public School,
                            Merrut Road, Ghaziabad. I have scored 89.5% in my
                            className 12 <sup>th</sup>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2018-19
                          </h3>
                          <h4 className="timeline-title">
                            Class 10<sup>th</sup>
                          </h4>
                          <p className="timeline-text">
                            I have completed my Class 10<sup>th</sup> from
                            Heritage Academy, Modinagar where I have scored
                            95.2%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience">
                  <h3 className="title">Position Of Responsibility</h3>
                  <div className="row">
                    <div className="titleline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2022-present
                          </h3>
                          <h4 className="timeline-title">
                            Coordinator, Programming Club, AKGEC
                          </h4>
                          <p className="timeline-text">
                            I am a Team Member of Programming Club in AKGEC,
                            Ghaziabad where I upskills myself in Competitive
                            Programming and Data Structures and Algorithm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
