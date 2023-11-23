import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/Users")
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    }, []);


    const isUsernameTaken = (username) => {
        return userData && userData.some(user => user.username === username);
    };

    const isEmailTaken = (email) => {
        return userData && userData.some(user => user.email === email);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (!formData.username.trim()) {
            isValid = false;
            validationErrors.username = "Username is required";
        } else if (isUsernameTaken(formData.username)) {
            isValid = false;
            validationErrors.username = "Username is already taken";
        }
        if (!formData.birthday) {
            isValid = false;
            validationErrors.birthday = "Birthdays is required";
        }
        if (!formData.email.trim()) {
            isValid = false;
            validationErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
        } else if (isEmailTaken(formData.email)) {
            isValid = false;
            validationErrors.email = "email is already taken";
        }
        if (!formData.phonenumber.trim()) {
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
            console.log("Sending request...");
            axios.post(`http://localhost:8000/Users/`, formData)
                .then(result => {
                    console.log("Server response:", result);
                    if (result.status === 201) {
                        alert("Registered Successfully");
                        navigate("/");
                    } else {
                        console.log("Server error:", result);
                    }
                })
                .catch(err => {
                    console.log("Server error:", err);
                });
        }
    };

    return (
        <div className="intro">
            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div div className="card shadow mb-5 mt-5">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="text-center text-primary fw-bold mb-5">Sign Up</h3>
                                    <form className="mt-5" onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input type="text"
                                                        id="Username"
                                                        value={formData.username}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="Username">Username</label>
                                                </div>
                                                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input
                                                        type="date"
                                                        id="birthdayDate"
                                                        value={formData.birthday}
                                                        placeholder=""
                                                        className="form-control shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, birthday: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="birthdayDate">Birthday</label>

                                                </div>
                                                <small>{errors.birthday && <div className="text-danger">{errors.birthday}</div>}</small>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input type="email"
                                                        id="emailAddress"
                                                        value={formData.email}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="emailAddress">Email</label>
                                                </div>
                                                <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline form-registerpagel">
                                                    <input type="text"
                                                        id="phoneNumber"
                                                        value={formData.phonenumber}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="phoneNumber">Phone Number</label>
                                                </div>
                                                <small>{errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}</small>
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
                                                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline form-registerpagel">
                                                    <input
                                                        type="password"
                                                        id="c   onfirmPassword"
                                                        value={formData.cppassword}
                                                        placeholder=""
                                                        className="form-control  shadow-none form-registerpage"
                                                        onChange={(event) => setFormData({ ...formData, cppassword: event.target.value })}
                                                    />
                                                    <label className="form-label label-registerpage" for="c onfirmPassword">Confirm Password</label>
                                                </div>
                                                <small>{errors.cppassword && <div className="text-danger">{errors.cppassword}</div>}</small>
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
