import React from "react";
import "./HelpDesk.css";
import images from "../../Assets/dataimg";
function HelpDesk() {
  return (
    <div
      className="background-1 "
      style={{ backgroundImage: `url(${images.background1})` }}
    >
      <div className="container text-center">
        <div className="service-section bg-gray section pt-5">
          <div className="container">
            <div className="section-title text-center ">
              <h3>
                <span className="fw-bold"> HelpDesk</span>
              </h3>
              <h1>
                <p>We always provide you with the best information</p>
              </h1>
            </div>
            <div className="row items-container clearfix">
              <div className="item">
                <div className="inner-box">
                  <div className="img_holder">
                    <a href="#">
                      <img
                        src={images.help1}
                        alt="images"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="image-content text-center">
                    <span>Cambridge Hopistal</span>
                    <a href="#">
                      <h6>Electronic Health Record Systems</h6>
                    </a>
                    <p>
                      EHR is a vital part of the medical support system. It is
                      an electronic system for storing patient health records
                      instead of paper records.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="inner-box">
                  <div className="img_holder">
                    <a href="#">
                      <img
                        src={images.help2}
                        alt="images"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="image-content text-center">
                    <span>Cambridge Hopistal</span>
                    <a href="#">
                      <h6>Patient Support Center</h6>
                    </a>
                    <p>
                      The Patient Support Center provides information and
                      assistance to patients regarding the use of healthcare
                      services, appointment scheduling, test results, and other
                      health-related information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="inner-box">
                  <div className="img_holder">
                    <a href="#">
                      <img
                        src={images.help3}
                        alt="images"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="image-content text-center">
                    <span>Cambridge Hopistal</span>
                    <a href="#">
                      <h6>Online Medical Helpdesk</h6>
                    </a>
                    <p>
                      Online Medical Helpdesk services offer medical
                      consultation through mobile applications, websites, or
                      other online platforms. <br />
                      Support includes guidance on symptoms, medication advice,
                      and instructions on using online healthcare services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="inner-box">
                  <div className="img_holder">
                    <a href="#">
                      <img
                        src={images.help4}
                        alt="images"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="image-content text-center">
                    <span>Cambridge Hopistal</span>
                    <a href="#">
                      <h6>Health Data Science Support</h6>
                    </a>
                    <p>
                      Health Data Science Support involves assistance with
                      analyzing healthcare data to understand trends, predict
                      disease outbreaks, and provide valuable information for
                      healthcare policy decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="inner-box">
                  <div className="img_holder">
                    <a href="#">
                      <img
                        src={images.help5}
                        alt="images"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="image-content text-center">
                    <span>Cambridge Hopistal</span>
                    <a href="#">
                      <h6>International Health Support</h6>
                    </a>
                    <p>
                      International Health Assistance provides health care
                      support and advice to individuals who are far from medical
                      facilities. Provides online international medical
                      consultation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section section style-three pb-0 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="contact-area style-two">
                  <div className="section-title">
                    <h3>
                      Request <span>Appointment</span>
                    </h3>
                  </div>
                  <form
                    name="contact_form"
                    className="default-form contact-form"
                    action="tenshiyami@gmail.com"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <select name="subject">
                            <option>Departments</option>
                            <option>Diagnostic</option>
                            <option>Psychological</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="Date"
                            placeholder="Date"
                            required=""
                            id="datepicker"
                          />
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div className="form-group">
                          <select name="subject">
                            <option>Doctor</option>
                            <option>Diagnostic</option>
                            <option>Psychological</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <textarea
                            name="form_message"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                        </div>
                        <div className="form-group text-center">
                          <button type="submit" className="btn-style-one">
                            submit now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="appointment-image-holder">
                  <figure>
                    <img src={images.doctor9} alt="Hopistal" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
