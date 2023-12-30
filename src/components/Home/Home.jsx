import React from "react";
import "./Home.css";
import me from "../../assets/me.jpg";
const Home = () => {
  return (
    <>
      <section id="home" className="home section">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name"> Dev Goel</span>
              </h3>
              <h3 className="my-profession">
                I' m a <span className="typing">Web Developer</span>
              </h3>
              <p>
                I'm a Web Developer with extensive experience for over 1.5
                years. My expertise is to create websites, which can handle the
                data and to develop the backend of the website.
              </p>
              <a
                href="https://www.linkedin.com/in/devgoel901/"
                className="btn hire-me">
                Let's Connect <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="home-img padd-15">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
