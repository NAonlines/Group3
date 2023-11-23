import React from "react";
import "../Footer/Footer.css";
import images from "../../Assets/dataimg";
function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-4">
                        <div className="container">
                            <img className="img-logo-1 mb-4" src={images.logo} alt="Cambridge Hospital" />
                            <p>
                                Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada
                                lorem maximus mauris.
                            </p>
                            <a className="footer-icon-yt" href="https://www.youtube.com/">
                                <i className="fa fa-youtube-play fa-2x"></i>
                            </a>
                            <a className="footer-icon-tw" href="https://www.twitter.com">
                                <i className="fa fa-twitter fa-2x "></i>
                            </a>
                            <a className="footer-icon-fa" href="https://www.facebook.com/">
                                <i className="fa fa-facebook-official fa-2x"></i>
                            </a>
                            <a className="footer-icon-igr" href="https://www.instagram.com/">
                                <i className="fa fa-instagram  fa-2x"></i>
                            </a>
                            <div className="mt-5 coppyright-text d-none d-lg-block">
                                <p className="mt-5">Copyright FPT Aptech ©2023 All rights reserved </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 footer-qc">
                        <div class="container box-form d-none d-md-block">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 text-nowrap">
                                            <h4 className="footer-title">Quick Contract</h4>
                                        </div>
                                    </div>
                                    <div className="footer-qc-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="group-input form-footerl">
                                                            <input
                                                                type="text"
                                                                class="form-control form-footer"
                                                                placeholder="Name"
                                                                aria-label="Username"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="input-group form-footerl">
                                                            <input
                                                                type="text"
                                                                class="form-control form-footer"
                                                                placeholder="Email"
                                                                aria-label="Server"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div class="mb-3">
                                                            <textarea
                                                                class="form-control"
                                                                placeholder="Message"
                                                                rows="8"
                                                            ></textarea>
                                                        </div>
                                                        <button className="bt btn btn-primary " type="submit">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container text-nowrap">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="footer-title mb-4 ">Opening Hours</h4>
                                        </div>
                                    </div>
                                    <div className="row shadow footer-oh-f">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-start">Monday – Thursday</p>
                                                </div>
                                                <div className="col-6">
                                                    <p class="text-end">8.00 – 19.00</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-start">Friday</p>
                                                </div>
                                                <div className="col-6">
                                                    <p class="text-end">8.00 - 18.30</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-start">Saturday</p>
                                                </div>
                                                <div className="col-6">
                                                    <p class="text-end">9.30 – 17.00</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-start">Sunday</p>
                                                </div>
                                                <div className="col-6">
                                                    <p class="text-end">9.30 – 15.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 coppyright-text d-lg-none fw-bold">
                <p className="mt-5 ">Copyright FPT Aptech ©2023 All rights reserved </p>
            </div>
        </div>
    );
}

export default Footer;
