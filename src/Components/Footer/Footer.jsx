import React from 'react'
import '../Footer/Footer.css';
import myImg from '../Img/Logo-cmb.png'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-4">
                        <div className="container">
                            <img className="img-logo-1 mb-4" src={myImg} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.
                            </p>
                            <a className="footer-icon-yt" href="https://www.youtube.com/"><i className="fa fa-youtube-play fa-2x"></i></a>
                            <a className="footer-icon-tw" href="https://www.twitter.com"><i className="fa fa-twitter fa-2x "></i></a>
                            <a className="footer-icon-fa" href="https://www.facebook.com/"><i className="fa fa-facebook-official fa-2x"></i></a>
                            <a className="footer-icon-igr" href="https://www.instagram.com/"><i className="fa fa-instagram  fa-2x"></i></a>
                            <div className="mt-5 coppyright-text d-none d-lg-block">
                                <p className="mt-5">Copyright FPT Aptech ©2023 All rights reserved </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 footer-qc">
                        <div class="container box-form d-none d-md-block">
                            <h4 className="footer-title">Quick Contract</h4>
                            <div className="footer-qc-form">
                                <div class="input-group mb-3 ">
                                    <span class="input-group-text">Name</span>
                                    <input type="text" class="form-control" placeholder="...Name" aria-label="Username" />
                                    <span class="input-group-text">Email</span>
                                    <input type="text" class="form-control" placeholder="...@mail.com" aria-label="Server" />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" placeholder="Message" rows="8"></textarea>
                                </div>
                                <button className="bt btn btn-primary " type="submit">
                                    Send Message
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container text-nowrap">
                            <h4 className="footer-title mb-4 ">Opening Hours</h4>
                            <div className="container footer-oh-f" >
                                <div className="">
                                    <p className="text-start">Monday – Thursday</p>
                                    <p className="text-start">Friday</p>
                                    <p className="text-start">Saturday</p>
                                    <p className="text-start">Sunday</p>
                                </div>
                                <div className="">
                                    <p class="text-end">8.00 – 19.00
                                    </p>
                                    <p class="text-end">8.00 - 18.30</p>
                                    <p class="text-end">9.30 – 17.00
                                    </p>
                                    <p class="text-end">9.30 – 15.00
                                    </p>

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
    )
}

export default Footer