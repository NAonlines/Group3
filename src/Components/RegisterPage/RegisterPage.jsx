import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../RegisterPage/RegisterPage.css'
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        birthday: '',
        phonenumber: '',
        email: '',
        password: '',
        cppassword: '',
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (!formData.username) {
            isValid = false;
            validationErrors.username = "Username is required";
        }
        if (!formData.birthday) {
            isValid = false;
            validationErrors.birthday = "Birthdays is required";
        }
        if (!formData.email) {
            isValid = false;
            validationErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
        }
        if (!formData.phonenumber) {
            isValid = false;
            validationErrors.phonenumber = "Phone number is required";
        } else if (!/(\d{3})(\d{3})(\d{4})/.test(formData.phonenumber)) {
            isValid = false;
            validationErrors.phonenumber = "Phone number not valid"
        }

        if (!formData.password) {
            isValid = false;
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = "Password must be at least 6 characters";
        }

        if (formData.cppassword !== formData.password) {
            isValid = false;
            validationErrors.cppassword = "Passwords do not match";
        }

        setErrors(validationErrors);
        setValid(isValid);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Sending axios request...");
            axios.post('http://localhost:8000/Users/', formData)
                .then(result => {
                    console.log("Server response:", result);
                    alert("Registered Successfully");
                    navigate("/");
                })
                .catch(err => { console.log("Axios error:", err); })
        }
    };

    return (
        <div className="intro">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div div className="card">

                                <div className="card-body p-4 p-md-5">
                                    <h3 className="text-center text-primary fw-bold mb-5">Sign Up</h3>
                                    <form className="mt-5" onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registerpagel">
                                                    <input type="text"
                                                        id="Username"
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="Username">Username</label>

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input
                                                        type="date"
                                                        className="form-control shadow-none form-registerpage"
                                                        id="birthdayDate"
                                                        placeholder=""
                                                        onChange={(event) => setFormData({ ...formData, birthday: event.target.value })}
                                                    />
                                                    <label htmlFor="birthdayDate" className="form-label label-registerpage" >Birthday</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registerpagel">
                                                    <input type="email"
                                                        id="emailAddress"
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="emailAddress">Email</label>

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registerpagel">
                                                    <input type="text"
                                                        id="phoneNumber"
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="phoneNumber">Phone Number</label>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        value={formData.password}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="password">Password</label>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input
                                                        type="text"
                                                        id="c   onfirmPassword"
                                                        value={formData.cppassword}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, cppassword: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="c onfirmPassword">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                {
                                                    valid ? <></> :
                                                        <small className="text-danger mb-5">
                                                            Please enter complete information
                                                        </small>

                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
                                                <small>{errors.birthday && <div className="text-danger">{errors.birthday}</div>}</small>
                                                <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                                                <small>{errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}</small>
                                                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                                                <small>{errors.cppassword && <div className="text-danger">{errors.cppassword}</div>}</small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mt-4">
                                                    <input className="btn btn-outline-primary btn-lg" type="submit" value="Sign Up" />
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
        </div>
    );
};

export default RegisterPage;
