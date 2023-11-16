import React, { useState } from 'react'
import '../Resgistration/Resgistration.css';
function Resgistration() {

    return (
        <form className="intro">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2">Registration</h3>

                                    <form action="">

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="text" id="firstName" placeholder="" className="form-control  shadow-none form-registration" />
                                                    <label className="form-label label-registration" for="firstName">First Name</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="text" id="lastName" placeholder="" className="form-control  shadow-none form-registration" />
                                                    <label className="form-label label-registration" for="lastName">Last Name</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="date"
                                                        className="form-control shadow-none form-registration"
                                                        id="birthdayDate"
                                                        placeholder=""
                                                    />
                                                    <label htmlFor="birthdayDate" className="form-label label-registration" >Date</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <h6 className="mb-2 pb-1">Gender: </h6>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        value="option1"
                                                    />
                                                    <label className="form-check-label " for="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        value="option2"
                                                    />
                                                    <label className="form-check-label" for="maleGender">Male</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="otherGender"
                                                        value="option3"
                                                    />
                                                    <label className="form-check-label" for="otherGender">Other</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="email" id="emailAddress" placeholder="" className="form-control  shadow-none form-registration" />
                                                    <label className="form-label label-registration" for="emailAddress">Email</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="tel" id="phoneNumber" placeholder="" className="form-control  shadow-none form-registration" />
                                                    <label className="form-label label-registration" for="phoneNumber">Phone Number</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">

                                                <h6 className="mb-3">State</h6>

                                                <select className="select">
                                                    <option value="1">USA</option>
                                                    <option value="2">UK</option>
                                                    <option value="3">India</option>
                                                    <option value="4">CN</option>
                                                    <option value="5">JP</option>
                                                    <option value="6">VN</option>
                                                    <option value="7">SG</option>
                                                    <option value="8">Russsia</option>
                                                </select>
                                                <label className="form-label select-label">your country</label>

                                                <div className="mt-4">
                                                    <input className="btn btn-warning btn-lg" type="submit" value="Submit" />
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Resgistration