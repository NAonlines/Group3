import React from "react";
import images from "../../Assets/dataimg";
import "./Cancer.css";
function Cancer() {
  return (
    <div>
      <div id="about" className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Welcome to Cancer Centre</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-left">
                <div className="single-well">
                  <a href="#">
                    <img src={images.khoi4} alt="Cancer Centre Image" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-middle">
                <div className="single-well">
                  <p>
                    Dear patients, families, and loved ones, we extend a warm
                    welcome to Cancer Centre. Our daily commitment is to provide
                    top-notch and effective healthcare in the relentless battle
                    against cancer. We are dedicated to constant growth and
                    delivering diverse medical services to enhance the quality
                    of life for patients and their families.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>
                      <strong>Expert Medical Team:</strong> At Cancer Centre, we
                      take pride in having a team of leading doctors and
                      specialists in the field of cancer, always ready to
                      accompany and support patients throughout their treatment
                      journey.
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <strong>State-of-the-Art Facilities:</strong> With
                      advanced medical equipment and modern infrastructure, we
                      promise to provide the best treatment environment,
                      ensuring the safety and comfort of our patients.
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <strong>Modern Treatment Approaches:</strong> Cancer
                      Centre employs advanced treatment methods and the latest
                      techniques to optimize recovery and control the
                      progression of the disease.
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <strong>Psychosocial Support:</strong> Recognizing that
                      conquering cancer involves not only physical but also
                      mental and emotional aspects, Cancer Centre offers
                      psychological and social support services for
                      comprehensive patient and family care.
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <strong>Holistic Care:</strong> Our centre specializes in
                      cancer care, ensuring that each patient receives optimal
                      care tailored to their specific type of cancer, promoting
                      a holistic approach to healing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline services-head text-center">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-medkit"></i>
                    </a>
                    <h4>Oncology Department</h4>
                    <p>
                      Cancer Center has specialized specialists in each type of
                      cancer, ensuring that every patient receives the most
                      optimal care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-plus-square"></i>
                    </a>
                    <h4>Research and Development Program</h4>
                    <p>
                      We continuously participate in research activities to
                      introduce the latest treatment methods and improve
                      treatment performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-user-md"></i>
                    </a>
                    <h4>Supportive Care</h4>
                    <p>
                      Cancer Center provides support services such as nutrition,
                      psychological counseling, and post-treatment care to help
                      patients fully recover.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-h-square"></i>
                    </a>
                    <h4>Community Education Program</h4>
                    <p>
                      We organize community education programs to increase
                      understanding of cancer and create opportunities for
                      people to participate in the fight against the disease.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-ambulance"></i>
                    </a>
                    <h4>Flexible Scheduling System</h4>
                    <p>
                      Cancer Center supports patients with flexible scheduling,
                      creating the most favorable conditions for them during
                      treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className=" about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="fa fa-heart"></i>
                    </a>
                    <h4>Community Engagement Programs</h4>
                    <p>
                      Join us in building a supportive community. Cancer Centre
                      hosts educational programs, fostering awareness and
                      involvement in the collective fight against cancer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="blog-area">
        <div className="blog-inner area-padding">
          <div className="blog-overly"></div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={images.khoi5} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">13 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">
                        {" "}
                        Unlocking the Secrets of Survival: Doctors at the
                        Forefront of Cancer Treatment
                      </a>
                    </h4>
                    <p>
                      In the fight against cancer, doctors play an undeniable
                      role. These people are not only medical professionals, but
                      also researchers who shape the future of cancer treatment.
                      This article will provide insight into the physicians who
                      are working to defeat this challenging disease and open up
                      new possibilities in the field of cancer treatment.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={images.khoi6} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">130 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">
                        Healthcare Heroes: Doctors and the Stories of Cancer
                        Conquerors
                      </a>
                    </h4>
                    <p>
                      This article will focus on outstanding doctors in the
                      field of fighting cancer, including courageous stories of
                      patients who have overcome difficult challenges. We will
                      learn about the extraordinary efforts of doctors and feel
                      the spiritual strength of those who have triumphed in
                      confronting this disease.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={images.khoi7} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">10 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">
                        Innovations in Cancer Treatment: The Doctor's
                        Trailblazing Path
                      </a>
                    </h4>
                    <p>
                      This article will present the outstanding improvements in
                      the field of cancer treatment due to the innovations of
                      doctors. From applying new technology to developing
                      cutting-edge treatments, we'll take a deep dive into the
                      journeys doctors are taking to change the way we view and
                      deal with cancer.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancer;
