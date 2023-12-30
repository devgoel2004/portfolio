import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Arjun from "../../assets/Testimonial.jpg";
import Naman from "../../assets/Testimonial3.png";
import Anushree from "../../assets/Testimonial2.jpg";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonial">
      <div>
        <div className="row">
          <div className="section-title padd-15">
            <h2>Testimonials</h2>
          </div>
        </div>
        <Carousel>
          <div>
            <a href="https://www.linkedin.com/in/naman12/" target="_blank">
              <img className="image-carousel" src={Naman} />
            </a>
            <p className="legend">
              "Dev Goel's coding prowess is unparalleled. His ability to tackle
              complex problems and engineer elegant solutions is truly
              remarkable." - Naman Gupta
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/singhalarjun77/"
              target="_blank">
              <img className="image-carousel" src={Arjun} />
            </a>
            <p className="legend">
              Dev's understanding of software architecture is exceptional. His
              coding finesse and meticulous attention to detail ensure that
              every line of code is not just functional but elegant." - Arjun
              Singhal
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/anushree-keshari-218876250/"
              target="_blank">
              <img className="image-carousel" src={Anushree} />
            </a>
            <p className="legend">
              "Dev is a software virtuoso. Working with him has been a
              revelation, and his expertise has elevated the standard for
              software development in our team." - Anushree Keshari
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
