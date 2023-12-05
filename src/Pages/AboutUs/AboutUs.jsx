import React from "react";
import "./AboutUs.css";
import images from "../../Assets/dataimg";
function AboutUs() {
  return (
    <div>
      <div id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <h4 className="text-center fw-bold">
              Cambridge Health Alliance (CHA) is a vibrant, innovative health
              system dedicated to providing equity and excellence for everyone,
              every time. With over 140,000 patients in Boston's metro-north
              region, CHA is proud to offer the health care people need most in
              their lives.
            </h4>
            <p>
              Key clinical services include primary care, behavioral health,
              emergency care, surgery and specialty care, hospital care,
              maternity and state-of-the-art testing services. These are offered
              at convenient neighborhood locations. CHA patients also have
              seamless access to advanced care for rare or complex conditions at
              its clinical partners - Beth Israel Deaconess Medical Center and
              Mass. General Hospital for Children.
            </p>
            <p>
              CHA's work extends far beyond patient care. It has a robust
              Department of Community Health Improvement and operates the
              nationally accredited Cambridge Public Health Department. It
              collaborates closely with local governments and non-profits to
              improve health and reduce barriers to care. As a teaching hospital
              of Harvard Medical School, Harvard School of Public Health,
              Harvard School of Dental Medicine and Tufts University School of
              Medicine, CHA trains the health care providers of tomorrow.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={images.Aboutus1} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 className="text-center fw-bold text-secondary">
                Our History
              </h3>
              <p className="fst-italic">
                CHA formed in 1996 when two Massachusetts hospitals - Cambridge
                Hospital and Somerville Hospital - joined together to better
                meet the needs of patients and fulfill a shared community health
                mission. In 2001, CHA acquired the former Whidden Memorial
                Hospital (now CHA Everett Hospital) and associated services in
                Malden and Revere. This expanded CHA's service area and gave it
                the ability to help even more individuals and families in need.
              </p>
            </div>
          </div>
          <br />
          <div className="section-title">
            <h4 className="text-center fw-bold text-secondary">
              Awards and Recognition
            </h4>
            <div className="content">
              <ul>
                <li>
                  <i>
                    <img src={images.Aboutus2} alt="" />
                  </i>
                  CHA Named #1 in Massachusetts for Serving its Community by
                  Lown Institute. CHA was recognized for its contributions to
                  community health and well-being. (2023-2024)
                </li>
                <li>
                  <i>
                    <img src={images.Aboutus2} alt="" />
                  </i>
                  CHA honored for surgical quality by American College of
                  Surgeons. On October 25, CHA received the prestigious ACS
                  Surgical Quality Partner distinction from the American College
                  of Surgeons for commitment to the highest quality of care. ACS
                  Quality Programs - the definitive measure of a hospital's
                  surgical quality - use the best data, expert input, and proven
                  processes to help surgical care teams deliver exceptional
                  care. Becoming an ACS Quality Partner means hospitals are
                  meeting the highest clinical standards developed by the
                  world's leading experts, signaling to patients and the
                  community their commitment to providing the highest quality
                  surgical care for all.This honor reflects the work of many
                  people across CHA, where we have rolled out new NSQIP quality
                  initiatives in GYN and Orthopedics this year. Among those
                  playing key roles include Rebecca Osgood, MD, chief of
                  pathology and head of our Cancer Committee, and Amy Moldrem,
                  MD, director of the Cambridge Breast Center, who both helped
                  get ACS certification for the Breast Center, as well as David
                  Becker, MD, chair of our Surgical Quality Improvement Program.
                  Siva Vithiananthan, MD, chief of surgery, Mariya Tsaur,
                  program manager for NSQIP quality, and Erika Fellinger, MD,
                  general surgeon and cancer liaison, accepted the honor
                  (pictured with Patricia Turner, MD, executive director and CEO
                  of the American College of Surgeons).
                </li>
                <li>
                  <i>
                    <img src={images.Aboutus2} alt="" />
                  </i>{" "}
                  CHA Named a Best-in-State Employer by Forbes: CHA has been
                  included on the Forbes list of Americas Best-in-State
                  Employers 2023. The award is presented by Forbes and Statista
                  Inc., the world-leading statistics portal and industry ranking
                  provider. Forbes and Statista surveyed more than 70,000
                  workers at companies across the nation to obtain employee
                  recommendations from companies with more than 500 employees.
                  Comment end
                </li>
                <li>
                  <i>
                    <img src={images.Aboutus2} alt="" />
                  </i>{" "}
                  CHA was ranked as the #1 hospital in Massachusetts in 2023 (A
                  grade) for Community Benefit by the Lown Institute, a
                  nonpartisan healthcare think tank. The Lown Hospital Index
                  examined more than 3,600 hospitals using 54 metrics to
                  evaluate equity, value and patient outcomes. CHA also earned A
                  grades for Inclusivity, Social Responsibility, Health Equity,
                  Value of Care, and Avoiding Overuse.
                </li>
                <li>
                  <i>
                    <img src={images.Aboutus2} alt="" />
                  </i>{" "}
                  CHA named one of Newsweek's Best Maternity Hospitals 2021,
                  2022 and 2023. This honor reflects CHA's extensive efforts to
                  reduce pregnancy risk, including prevention training and low
                  C-section rates.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="section-title">
            <h4 className="text-center fw-bold text-secondary">
              Commitment to Diverse People
            </h4>
            <p>
              CHA has a longstanding commitment to vulnerable and diverse
              patients and is proud to serve all those in need. Its motto is "We
              Care for All."
            </p>
            <p>
              Many CHA patients have public or subsidized insurance (Medicare,
              Medicaid, etc.) and traditionally experience barriers to care. In
              order to serve these individuals and families, CHA has bilingual
              providers, a robust interpreter program and numerous linguistic
              services. It also has an award-winning Volunteer Health Advisor
              program that brings together people from many cultures to help
              local residents gain access to care and live healthier lives.
            </p>
          </div>
          <br />
          <div className="section-title">
            <h4 className="text-center fw-bold text-secondary">
              Our Academic Mission
            </h4>
            <p>
              CHA is an academic health system with outstanding
              physician-teachers and strong training and research programs. It
              is the only healthcare system that is a teaching hospital of
              Harvard Medical School, Harvard School of Public Health, Harvard
              School of Dental Medicine and the Tufts University School of
              Medicine.
            </p>
            <p>
              CHA offers a variety of undergraduate, graduate and continuing
              medical education efforts. These include the noteworthy
              Harvard-Cambridge Integrated Clerkship, an alternative experience
              for third year Harvard Medical students with an innovative
              “continuity of care” curriculum. CHA also sponsors Harvard
              affiliated training programs in internal medicine, adult and child
              psychiatry, psychology and dentistry, the Tufts family medicine
              residency and a Pharmacy residency program.
            </p>
          </div>
          <br />
          <div className="section-title">
            <h4 className="text-center fw-bold text-secondary">
              Mission, Vision and Values
            </h4>
            <ul>
              <li>
                <i>Mission: </i>To improve the health of our patients and
                communities.
              </li>
              <li>
                <i>Vision: </i>Equity and excellence for everyone, every time.
              </li>
              <li>
                <i>Values: </i>To Make a Positive Difference - Community,
                Integrity, Respect, Compassion, Learning, Excellence (CIRCLE).
              </li>
            </ul>
            <p>
              Cambridge Health Alliance prohibits discrimination based on age,
              race, ethnicity, religion, culture, language, physical or mental
              disability, socioeconomic status, sex, sexual orientation, and
              gender identity or expression.
            </p>
          </div>
          <br />
          <div className="section-title">
            <h4 className="text-center fw-bold text-secondary">
              Anti-Racism Statement
            </h4>
            <p>
              At Cambridge Health Alliance (CHA), we commit to fostering a
              culture across our organization that is diverse, equitable,
              inclusive, and anti-racist for staff and patients and members of
              the communities we serve. We hold ourselves accountable for doing
              our part in working to address oppression and advancing equity to
              overcome the history of systemic racial injustice and violence in
              healthcare.
            </p>
          </div>
          <br />
        </div>
      </div>
      <div className="text-center">
        <h1 className="fst-italic">Address</h1>
        <p>1493 Cambridge St, Cambridge, MA 02139, United States</p>
        <div className="col-lg-12 pt-2 pt-lg-0 mt-4 mt-lg-0 col-12 col-sm-6 col-md-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14201.67009370153!2d-71.11493150708728!3d42.375409481871074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377494d1e7ea5%3A0xc8ab921e1fa183ef!2sCHA%20Cambridge%20Hospital!5e0!3m2!1sen!2s!4v1700455101006!5m2!1sen!2s"
            width="1200"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
