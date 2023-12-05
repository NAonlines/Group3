import React from "react";
import "./doctorschedule.css";
import images from "../../Assets/dataimg";
function doctorschedule() {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="border-start border-5 border-primary ps-5 mb-5">
          <h1 class="display-5 text-center text-uppercase mb-0">
            DOCTOR SCHEDULE
          </h1>
        </div>
        <div class="row g-5">
          <div class="doctorschedule col-lg-6 ">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor1} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <h5 class="text-uppercase mb-3">Dr. Elizabeth Abbate</h5>
                    <p>Specialties:Internal Medicine,Primary Care</p>
                    <h6>Schedule: Mondey,Tuesday,Thursday,Saturday,Sunday</h6>
                    <h6>Time: 8am-12pm</h6>
                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" doctorschedule col-lg-6">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor2} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <div class="d-flex mb-3"></div>
                    <h5 class="text-uppercase mb-3">
                      Dr.Jeannette Adelsberger{" "}
                    </h5>
                    <p>Specialties: Optometry</p>
                    <h6>
                      Schedule:Tuesday, Wednesday, Friday, Saturday, Sunday
                    </h6>
                    <h6>Time: 1pm-3pm</h6>
                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="doctorschedule col-lg-6">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor3} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <div class="d-flex mb-3"></div>
                    <h5 class="text-uppercase mb-3">Dr.John Ahern</h5>
                    <p>Specialties: Child & Adolescent,PsychiatryPsychology</p>
                    <h6>
                      Schedule: Monday, Wednesday, Thursday, Friday, Sunday
                    </h6>
                    <h6>Time: 8am-3pm</h6>
                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="doctorschedule col-lg-6">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor4} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <div class="d-flex mb-3"></div>
                    <h5 class="text-uppercase mb-3">Dr.Stephen Allegra</h5>
                    <p>Specialties: Psychology</p>
                    <h6>
                      Schedule: Monday, Tuesday, Wednesday, Thursday, Friday,
                      Saturday
                    </h6>
                    <h6>Time: 8am-12pm</h6>
                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="doctorschedule col-lg-6">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor5} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <div class="d-flex mb-3"></div>
                    <h5 class="text-uppercase mb-3">Dr.David Becker</h5>
                    <p>Specialties: Emergency Medicine</p>
                    <h6>
                      Schedule: Monday, Tuesday, Thursday, Friday, Saturday,
                      Sunday
                    </h6>
                    <h6>Time: 8am-10am</h6>

                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="doctorschedule  col-lg-6">
            <div class="blog-item">
              <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img class="img-fluid h-100" src={images.doctor6} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                  <div class="p-4">
                    <div class="d-flex mb-3"></div>
                    <h5 class="text-uppercase mb-3">Alex Baker</h5>
                    <p>Specialties: Anesthesiology</p>
                    <h6>Schedule: Mondey,Tuesday,Saturday,Sunday</h6>
                    <h6>Time: 8am-12pm</h6>
                    <a class="text-info text-uppercase" href="">
                      Read More<i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default doctorschedule;
