import React, { useState } from 'react'
import '../Resgistration/Resgistration.css';
import axios from 'axios';
function Resgistration() {
    const [regisData, setRegisData] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        gender: '',
        email: '',
        phonenumber: '',
        address: '',
        city: '',
        states: '',
        zipcode: '',
        country: '',
        insurancename: '',
        preBook: false,
        department: "",
    });
    const [price, setPrice] = useState(0);
    const handlePreBookChange = () => {
        const preBookPrice = regisData.preBook ? -2 : 2;
        setRegisData({ ...regisData, preBook: !regisData.preBook });
        setPrice(price + preBookPrice);
    };
    const handleDepartmentChange = (event) => {
        const selectedValue = event.target.value;
        setPrice(regisData.preBook ? parseInt(selectedValue, 10) + 2 : parseInt(selectedValue, 10));
        setRegisData({ ...regisData, department: selectedValue });
    };

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (!regisData.firstname) {
            isValid = false;
            validationErrors.firstname = "Firstname required";
        }
        if (!regisData.lastname) {
            isValid = false;
            validationErrors.lastname = "Lastname required";
        }
        if (!regisData.birthday) {
            isValid = false;
            validationErrors.birthday = "Birthday required";
        }
        if (!regisData.email) {
            isValid = false;
            validationErrors.email = "Email required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regisData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
        }
        if (!regisData.phonenumber) {
            isValid = false;
            validationErrors.phonenumber = "Phone number required";
        } else if (!/(\d{3})(\d{3})(\d{4})/.test(regisData.phonenumber)) {
            isValid = false;
            validationErrors.phonenumber = "Phone number not valid";
        }
        if (!regisData.address) {
            isValid = false;
            validationErrors.address = "Address required";
        }
        if (!regisData.city) {
            isValid = false;
            validationErrors.city = "City required";
        }
        if (!regisData.states) {
            isValid = false;
            validationErrors.states = "State required";
        }
        if (!regisData.zipcode) {
            isValid = false;
            validationErrors.zipcode = "Zipcode required";
        }
        if (!regisData.country) {
            isValid = false;
            validationErrors.country = "Country required";
        }
        if (!regisData.insurancename) {
            isValid = false;
            validationErrors.insurancename = "Isurance name required";
        }
        setErrors(validationErrors);
        setValid(isValid);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Sending request...");
            const updatedPrice = regisData.preBook ? price : price;
            axios
                .post(`http://localhost:8001/Registrationdata`, {
                    ...regisData,
                    price: updatedPrice,
                    preBook: regisData.preBook,
                })
                .then((result) => {
                    console.log("Server response:", result);
                    alert("Registered Successfully");
                })
                .catch((err) => {
                    console.log("Server error:", err);
                });
        }
    };


    const [country, setCountry] = useState('');
    const [countryError, setCountryError] = useState('');

    const handleCountryChange = (event) => {
        setCountryError('');
        setCountry(event.target.value);
        setRegisData({ ...regisData, country: event.target.value })

    };


    return (
        <div className="intro">
            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow mb-5 mt-5">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 fw-bold">Registration</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input type="text"
                                                        id="firstName"
                                                        value={regisData.firstname}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, firstname: event.target.value })} />
                                                    <label className="form-label label-registration" htmlFor="firstName">First Name</label>
                                                </div>
                                                <small>{errors.firstname && <div className="text-danger">{errors.firstname}</div>}</small>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input type="text"
                                                        id="lastName"
                                                        value={regisData.lastname}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, lastname: event.target.value })} />
                                                    <label className="form-label label-registration" htmlFor="lastName">Last Name</label>
                                                </div>
                                                <small>{errors.lastname && <div className="text-danger">{errors.lastname}</div>}</small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="date"
                                                        id="birthdayDate"
                                                        value={regisData.birthday}
                                                        placeholder=""
                                                        className="form-control shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, birthday: event.target.value })}
                                                    />
                                                    <label htmlFor="birthdayDate" className="form-label label-registration" >Birthday</label>
                                                </div>
                                                <small>{errors.birthday && <div className="text-danger">{errors.birthday}</div>}</small>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <h6 className="mb-2 pb-1">Gender </h6>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        value="Female"
                                                        onChange={(event) => setRegisData({ ...regisData, gender: event.target.value })}
                                                    />
                                                    <label className="form-check-label " htmlFor="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        value="Male"
                                                        onChange={(event) => setRegisData({ ...regisData, gender: event.target.value })}
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                </div>
                                                <small>{errors.gender && <div className="text-danger">{errors.gender}</div>}</small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input type="email"
                                                        id="emailAddress"
                                                        value={regisData.email}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, email: event.target.value })} />
                                                    <label className="form-label label-registration" htmlFor="emailAddress">Email</label>
                                                </div>
                                                <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="tel"
                                                        id="phoneNumber"
                                                        value={regisData.phonenumber}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, phonenumber: event.target.value })} />
                                                    <label className="form-label label-registration" htmlFor="phoneNumber">Phone Number</label>
                                                </div>
                                                <small>{errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="text"
                                                        className="form-control shadow-none form-registration"
                                                        value={regisData.address}
                                                        id="Address"
                                                        placeholder=""
                                                        onChange={(event) => setRegisData({ ...regisData, address: event.target.value })}
                                                    />
                                                    <label htmlFor="Address" className="form-label label-registration" >Address</label>
                                                </div>
                                                <small>{errors.address && <div className="text-danger">{errors.address}</div>}</small>
                                            </div>
                                            <div className="col-md-3 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="text"
                                                        className="form-control shadow-none form-registration"
                                                        value={regisData.city}
                                                        id="City"
                                                        placeholder=""
                                                        onChange={(event) => setRegisData({ ...regisData, city: event.target.value })}
                                                    />
                                                    <label htmlFor="City" className="form-label label-registration" >City</label>
                                                </div>
                                                <small>{errors.city && <div className="text-danger">{errors.city}</div>}</small>
                                            </div>
                                            <div className="col-md-3 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="text"
                                                        className="form-control shadow-none form-registration"
                                                        value={regisData.states}
                                                        id="State"
                                                        placeholder=""
                                                        onChange={(event) => setRegisData({ ...regisData, states: event.target.value })}
                                                    />
                                                    <label htmlFor="State" className="form-label label-registration" >State</label>
                                                </div>
                                                <small>{countryError && <div className="text-danger">{countryError}</div>}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-none d-md-block">
                                            </div>
                                            <div className="col-md-3 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="text"
                                                        className="form-control shadow-none form-registration"
                                                        value={regisData.zipcode}
                                                        id="zipCode"
                                                        placeholder=""
                                                        onChange={(event) => setRegisData({ ...regisData, zipcode: event.target.value })}
                                                    />
                                                    <label htmlFor="zipCode " className="form-label label-registration" >Zip code</label>
                                                </div>
                                                <small>{errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}</small>
                                            </div>
                                            <div className="col-md-3 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <select
                                                        className="form-control shadow-none form-registration"
                                                        id="country"
                                                        value={country}
                                                        onChange={handleCountryChange}

                                                    >
                                                        <option value="usa">USA</option>
                                                        <option value="canada">Canada</option>
                                                        <option value="uk">UK</option>
                                                        <option value="india">India</option>
                                                        <option value="cn">CN</option>
                                                        <option value="jp">JP</option>
                                                        <option value="vnm">VN</option>
                                                    </select>
                                                    <label htmlFor="Country" className="form-label label-registration" >Country</label>
                                                </div>
                                                <small>{errors.country && <div className="text-danger">{errors.country}</div>}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registrationl">
                                                    <input type="text"
                                                        id="insuranceName"
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registration"
                                                        onChange={(event) => setRegisData({ ...regisData, insurancename: event.target.value })} />
                                                    <label className="form-label label-registration" htmlFor="insuranceName">Insurance Name</label>
                                                </div>
                                                <small>{errors.insurancename && <div className="text-danger">{errors.insurancename}</div>}</small>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <input
                                                        type="checkbox"
                                                        id="preBook"
                                                        checked={regisData.preBook}
                                                        onChange={handlePreBookChange}
                                                    />
                                                    <label className="form-label label-registration" htmlFor="preBook">Pre-book</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registrationl">
                                                    <select
                                                        className="form-control shadow-none form-registration"
                                                        id="Department"
                                                        onChange={handleDepartmentChange}
                                                    >
                                                        <option value="0"></option>
                                                        <option value="4">4$</option>
                                                        <option value="5">5$</option>
                                                        <option value="6">6$</option>
                                                        <option value="7">7$</option>
                                                        <option value="8">8$</option>
                                                        <option value="9">9$</option>
                                                        <option value="10">10$</option>
                                                    </select>
                                                    <label htmlFor="Address" className="form-label label-registration">
                                                        Department
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row border-top">
                                            <div className="col-md-6 mt-3">
                                                <div className="text-input my-1">Price:</div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="input-group-text container-fluid">
                                                    <div className="me-auto">$</div>
                                                    <div>{price}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-md -6">
                                                <input className="btn btn-outline-warning btn-ms" type="submit" value="Submit" />

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Resgistration