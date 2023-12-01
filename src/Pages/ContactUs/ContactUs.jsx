import React from 'react'
import './ContactUs.css'
import images from '../../Assets/dataimg'

function ContactUs() {
    return (
        <div>
            <div className="section pb_70 ">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-xl-4 col-md-6 col-12 col-sm-6 col-md-3">
                            <div className="contact_wrap contact_style3">
                                <div className="contact_icon">
                                    <img src={images.Contactus1} alt="" />
                                </div>
                                <div className="contact_text">
                                    <span>Address</span>
                                    <p>1493 Cambridge St, Cambridge, MA 02139, United States</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 col-sm-6 col-md-3">
                            <div className="contact_wrap contact_style3">
                                <div className="contact_icon">
                                    <img src={images.Contactus2} alt="" />
                                </div>
                                <div className="contact_text">
                                    <span>Email Address</span>
                                    <a className="pb-5" href="">hospital@gmail.com</a>
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-12 col-sm-6 col-md-3">
                            <div className="contact_wrap contact_style3">
                                <div className="contact_icon">
                                    <img src={images.Contactus3} alt="" />
                                </div>
                                <div className="contact_text">
                                    <span>Phone</span>
                                    <p className='pb-1'>+ 457 789 789 65
                                        <br />

                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-0 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 col-sm-6 col-md-3">
                            <div className="heading_s1">
                                <h2>Get In touch</h2>
                            </div>
                            <p className="leads">If You Have Any Query, Feel Free To Contact Us</p>
                            <div className="field_form">
                                <form method="post" name="enq">
                                    <div className="row">
                                        <div className="form-group col-md-6 mb-3">
                                            <input required placeholder="Enter Name *" id="first-name" className="form-control"
                                                name="name" type="text" />
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <input required placeholder="Enter Email *" id="email" className="form-control"
                                                name="email" type="email" />
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <input required placeholder="Enter Phone No. *" id="phone" className="form-control"
                                                name="phone" />
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <input placeholder="Enter Subject" id="subject" className="form-control"
                                                name="subject" />
                                        </div>
                                        <div className="form-group col-md-12 mb-3">
                                            <textarea required placeholder="Message *" id="description" className="form-control"
                                                name="message" rows="4"></textarea>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <button className='contactus_send'>Send Message</button>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div id="alert-msg" className="alert-msg text-center"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-2 pt-lg-0 mt-4 mt-lg-0 col-12 col-sm-6 col-md-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14201.67009370153!2d-71.11493150708728!3d42.375409481871074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377494d1e7ea5%3A0xc8ab921e1fa183ef!2sCHA%20Cambridge%20Hospital!5e0!3m2!1sen!2s!4v1700455101006!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
