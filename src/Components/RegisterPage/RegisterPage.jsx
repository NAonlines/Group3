import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersAsync, isUsernameTaken, isEmailTaken, registerUser } from '../../Api/Users';
import '../RegisterPage/RegisterPage.css';


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        birthday: '',
        phonenumber: '',
        email: '',
        password: '',
        cppassword: '',
    });
    const Users = require('../../Api/Users');
    const { getUsers, isUsernameTaken, isEmailTaken, registerUser } = Users;
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUsersAsync().then(users => setUserData(users));
    }, []);

    const validateForm = () => {
        let isValid = true;
        let validationErrors = {};

        if (!formData.username.trim()) {
            isValid = false;
            validationErrors.username = "Username is required";
        }
        if (!formData.email.trim()) {
            isValid = false;
            validationErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
        }
        if (!formData.phonenumber.trim()) {
            isValid = false;
            validationErrors.phonenumber = "Phone number is required";
        } else if (!/(\d{3})(\d{3})(\d{4})/.test(formData.phonenumber)) {
            isValid = false;
            validationErrors.phonenumber = "Phone number not valid";
        }
        if (!formData.password.trim()) {
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

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            const registrationSuccess = await registerUser(formData);

            if (registrationSuccess) {
                alert("Registered Successfully");
                navigate("/");
            }
            // else {
            //     const isUsernameTaken = await isUsernameTakenAsync(username);
            //     const isEmailTaken = await isEmailTakenAsync(email);

            //     if (isUsernameTaken) {
            //         alert('Registration failed. Username already taken.');
            //     } else if (isEmailTaken) {
            //         alert('Registration failed. Email already taken.');
            //     } else {
            //         alert('Registration failed. Please try again later.');
            //     }
            // }
        }
    };
    return (
        <div className="intro">
            <div className="mask d-flex align-items-center text-center h-100">
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
                                                    <label className="form-label label-registerpage" for="confirmPassword">Confirm Password</label>
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
