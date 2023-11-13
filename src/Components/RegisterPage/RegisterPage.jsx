import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
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

        if (!formData.email) {
            isValid = false;
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
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
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center text-primary fw-bold">Sign Up</h3>
                        </div>
                        {
                            valid ? <></> :
                                <span className="text-danger">
                                    Please enter full
                                </span>
                        }
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                    />
                                    {errors.username && <div className="text-danger">{errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cppassword" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="cppassword"
                                        name="cppassword"
                                        value={formData.cppassword}
                                        onChange={(event) => setFormData({ ...formData, cppassword: event.target.value })}
                                    />
                                    {errors.cppassword && <div className="text-danger">{errors.cppassword}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
