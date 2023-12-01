import React from 'react'
import './SuccessStories.css'
import images from '../../Assets/dataimg'

function SuccesStories() {
    return (
        <div>
            <div id="about" className="about">
                <div className="container-fluid">
                    <div className="row flexcss">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about-box">
                                <h3>Doctors in US perform brain surgery on unborn baby in womb</h3>
                                <p>Doctors in the city of Boston have performed brain surgery on an unborn baby in the womb.According to CNN reports, a group of doctors from Boston Children's Hospital successfully performed the first of its kind brain surgery while the baby was still in the womb.Doctors detected a rare disease called "vein of Galen malformation" when the baby was 30 weeks old.The surgery, which was published in the "Stroke in the United States" science journal and was stated to be the first in its field, was performed via the detection of an artery with ultrasound.</p>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-img">
                                <img src={images.SuccesStories1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="client_section layout_padding text-center">
                <div className="container layout_padding2-top">
                    <div className="client_container layout_padding">
                        <div className="debox">
                            <p>
                                Doctors used ultrasound to direct a long needle through the mother's abdomen into the part of the baby's brain that was affected. Doctors then injected a substance into the vein to prevent backflow into the veins.The doctors who performed the successful surgery saved the unborn baby from serious diseases such as heart failure and neurological disorders that would have led to death after birth.From Boston Children's Hospital, Dr. Darren Orbach said that if the disease was not treated, serious problems such as serious brain damage and heart failure may have occurred in the baby after birth.
                                Orbach noted that between 50 and 60% of all babies with the disease develop serious complications after birth.
                                "The disease has a mortality rate of about 40%. About half of the infants who survive also suffer from serious neurological and mental problems."Doctors state that baby Denver, who was born shortly after the operation procedure on March 17, is still healthy after about two months, and does not require any medication related to heart failure, or any additional medical intervention.
                            </p>
                            <div className="img-box1">
                                <img src={images.SuccesStories2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SuccesStories

