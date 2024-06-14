import React, { useState } from "react";
import "./LoginForm.css";
import backgroundImage from "./background.jpg";
import mainBackgroundImage from "./mainBg.jpg";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        });
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Submit the form data
            console.log("Form submitted:", formData);
            axios
                .post(`http://localhost:3333/users`, formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            // Reset the form fields
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                country: "",
            });
            clearForm();
        } else {
            setErrors(errors);
        }
    };
    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        });
        setErrors({});
    };
    const validate = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email address";
        }
        if (!formData.phone) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Invalid phone number";
        }
        if (!formData.address) {
            errors.address = "Address is required";
        }
        if (!formData.city) {
            errors.city = "City is required";
        }
        if (!formData.state) {
            errors.state = "State is required";
        }
        if (!formData.zip) {
            errors.zip = "Zip code is required";
        }
        if (!formData.country) {
            errors.country = "Country is required";
        }
        return errors;
    };

    return (
        <section
            style={{
                backgroundImage: `url(${mainBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
            }}
        >
            <div className="container py-5" style={{ opacity: "0.6" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg rounded-lg">
                            <div
                                className="card-header bg-primary text-white text-center rounded-top"
                                style={{
                                    backgroundImage: `url(${backgroundImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <h4 className="mb-0">User Information</h4>
                            </div>
                            <div
                                className="card-body"
                                style={{
                                    background: "transparent",
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea
                                            className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                            id="address"
                                            name="address"
                                            rows="3"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Enter your address"
                                        ></textarea>
                                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter your city"
                                        />
                                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.state ? "is-invalid" : ""}`}
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="Enter your state"
                                        />
                                        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zip">Zip Code</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.zip ? "is-invalid" : ""}`}
                                            id="zip"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleChange}
                                            placeholder="Enter your zip code"
                                        />
                                        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.country ? "is-invalid" : ""}`}
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Enter your country"
                                        />
                                        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                                    </div>

                                    <div className="form-group d-flex justify-content-between mt-3">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Submit
                                        </button>
                                        <button type="button" className="btn btn-secondary btn-lg" onClick={resetForm}>
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default LoginForm;
