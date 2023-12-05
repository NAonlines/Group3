import React from 'react'
import "./Diagnostic.css"
import images from '../../Assets/dataimg'
function Diagnostic() {
  return (
    <div>
          <div id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Welcome to Diagnostic Centre!</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src={images.khoi0} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
            <h3>Welcome to Diagnostic Centre, where we prioritize your health and well-being. </h3>
            <p className="fst-italic">
            Our commitment is to prxovide exceptional diagnostic services with a focus on accuracy, efficiency, and your overall comfort.
            </p>
            <ul>
              <li><i className="fa  fa-check-circle-o"></i> Cutting-Edge Diagnostic Services</li>
              <li><i className="fa  fa-check-circle-o"></i>  Friendly Atmosphere and Amenities</li>
              <li><i className="fa  fa-check-circle-o"></i> Swift and Flexible Services</li>
            </ul>
            <p>
            Our ultimate goal is to ensure comprehensive health for everyone. Diagnostic Centre is not just a place for diagnoses; it's a partner in your healthcare journey. We aim to assist you in understanding your health status better and provide proactive measures for prevention.

Thank you for choosing Diagnostic Centre. Let us care for you and accompany you on your healthcare journey!
            </p>
          </div>
        </div>

      </div>
    </div>
    <div id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Diagnostic Centre: Advanced Healthcare Techniques and Services</h2>
          <p>Our Commitment to Your Health:
At Diagnostic Centre, our overarching commitment is to deliver advanced, patient-centered healthcare services. Whether through state-of-the-art diagnostics or holistic wellness programs, we strive to enhance and safeguard your well-being at every step of your healthcare experience.
</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className=" fa fa-picture-o"></i></div>
            <h4 className="title"><a href="">State-of-the-Art Diagnostic Imaging</a></h4>
            <p className="description">Our centre utilizes cutting-edge diagnostic imaging technologies, including MRI, CT scans, and X-rays, ensuring precise and detailed assessments for accurate diagnosis.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="fa fa-flask"></i></div>
            <h4 className="title"><a href="">Comprehensive Laboratory Services</a></h4>
            <p className="description">With a fully equipped laboratory, we offer a wide range of diagnostic tests, from routine blood work to specialized genetic testing, providing thorough insights into your health.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="fa fa-rss"></i></div>
            <h4 className="title"><a href="">Telemedicine Consultations</a></h4>
            <p className="description">Embracing technology, we offer telemedicine consultations, allowing you to connect with our healthcare professionals remotely for advice, follow-ups, and consultations without the need for a physical visit.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="fa fa-users"></i></div>
            <h4 className="title"><a href="">Wellness Programs and Preventive Care</a></h4>
            <p className="description">Beyond diagnosis, our centre emphasizes preventive care through tailored wellness programs. We provide guidance on lifestyle changes, nutrition, and exercise to promote overall health and prevent future health issues.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="fa fa-male"></i></div>
            <h4 className="title"><a href="">Patient-Centric Approach</a></h4>
            <p className="description">We prioritize a patient-centric approach, ensuring that you are actively involved in your healthcare journey. Our team takes the time to explain diagnoses, discuss treatment options, and address any concerns you may have.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="fa fa-heartbeat"></i></div>
            <h4 className="title"><a href="">Multidisciplinary Healthcare Teams</a></h4>
            <p className="description">Collaborative care is key to our success. Our centre boasts multidisciplinary healthcare teams, including specialists from various fields, working together to provide comprehensive and integrated care for complex medical conditions.</p>
          </div>
        </div>

      </div>
    </div>
    <div id="about">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>Diagnostic Centre: Elevating Healthcare Excellence</h3>
          <p>Your Health, Our Priority:
At Diagnostic Centre, we aspire to be more than just a healthcare facility; we aim to be your partner in wellness. Through cutting-edge diagnostics, patient-centered care, and integrated wellness solutions, we are dedicated to enhancing and safeguarding your health at every step of your healthcare journey.</p>
        </header>

        <div className="row about-container">

          <div className="col-lg-6 content order-lg-1 order-2">
            <h3>
            Integrated Wellness Solutions
            </h3>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="fa fa-eyedropper"></i></div>
              <h4 className="title"><a href="">Preventive Care Programs</a></h4>
              <p className="description">Our Diagnostic Centre goes beyond diagnosing illnesses; we actively promote preventive care. Through tailored wellness programs, we focus on proactive measures to maintain and improve your health, emphasizing lifestyle adjustments, regular screenings, and health education.</p>
            </div>

            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="fa fa-handshake-o"></i></div>
              <h4 className="title"><a href="">Multidisciplinary Collaboration</a></h4>
              <p className="description">Our approach involves collaboration among various healthcare specialists. With a team of experts spanning different medical disciplines, we provide integrated care for comprehensive solutions, addressing not just symptoms but the underlying factors affecting your health.</p>
            </div>

          </div>

          <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img src={images.khoi1} className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={images.khoi2} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
            <h4>Cutting-Edge Diagnostics.</h4>
            <p>
            Leveraging the latest advancements in medical technology, our Diagnostic Centre provides precise and detailed diagnostic services.
            </p>
            <p>
            From advanced imaging techniques to comprehensive laboratory analyses, we are committed to delivering accurate and timely results to aid in effective medical decision-making.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src={images.khoi3} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>Patient-Centric Approach.</h4>
            <p>
            Empathy and Communication
            </p>
            <p>
            At the core of our philosophy is a commitment to patient-centric care. Our healthcare professionals prioritize open communication and empathetic interactions. 
            </p>
            <p>
            We ensure that you are well-informed about your health status, treatment options, and actively involve you in decisions regarding your care.
            </p>
          </div>

        </div>

      </div>
    </div>



    </div>
  )
}

export default Diagnostic
