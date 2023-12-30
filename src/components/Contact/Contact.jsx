import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://porfolio-backend-zxmw.vercel.app/api/v1/sendEmail",
        {
          name,
          email,
          subject,
          message,
        }
      );
      toast.success("Email sent", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(res.data);
    } catch (error) {
      toast.error("Something wrong");
      console.log(`Error send data`, error);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
          <h4 className="contact-sub-title padd-15">I' M AT YOUR SERVICES</h4>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a href="tel:+919690011021">
                  <i className="fa fa-phone"></i>
                </a>
                <h4>Call</h4>
                <p>+91 9690011021</p>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a
                  href="https://maps.app.goo.gl/5urSU8oXpAFRTxVo9"
                  target="_blank">
                  <i className="fa fa-map-marker-alt"></i>
                </a>
                <h4>Office</h4>
                <a href="https://maps.app.goo.gl/5urSU8oXpAFRTxVo9">
                  <p>Ghaziabad</p>
                </a>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>devgoel901@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <a
                  href="https://devgoel2004.github.io/portfolio"
                  target="_blank">
                  <i className="fa fa-globe-europe"></i>
                </a>
                <h4>Website</h4>
                <a href="https://devgoel2004.github.io/portfolio-frontend">
                  <p>https://devgoel2004.github.io/portfolio-frontend</p>
                </a>
              </div>
            </div>
          </div>

          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I' M VERY RESPONSIVE TO MESSAGE
          </h4>

          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={subject}
                      onChange={handleSubject}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="fomr-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Message"
                      onChange={handleMessage}
                      value={message}></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button
                      type="submit"
                      style={{ marginTop: "20px" }}
                      className="btn"
                      onClick={handleSubmit}>
                      Send Message
                    </button>
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

export default Contact;
