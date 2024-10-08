import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here (e.g., API call)
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // After successful registration, navigate to the login page
        navigate('/login');
    };

    return (
        <div className="bg-primary" style={{ height: '100vh' }}>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Create Account</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input
                                                                className="form-control"
                                                                id="inputFirstName"
                                                                type="text"
                                                                placeholder="Enter your first name"
                                                                value={firstName}
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                                required
                                                            />
                                                            <label htmlFor="inputFirstName">First name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                className="form-control"
                                                                id="inputLastName"
                                                                type="text"
                                                                placeholder="Enter your last name"
                                                                value={lastName}
                                                                onChange={(e) => setLastName(e.target.value)}
                                                                required
                                                            />
                                                            <label htmlFor="inputLastName">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="inputEmail"
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input
                                                                className="form-control"
                                                                id="inputPassword"
                                                                type="password"
                                                                placeholder="Create a password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            <label htmlFor="inputPassword">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input
                                                                className="form-control"
                                                                id="inputPasswordConfirm"
                                                                type="password"
                                                                placeholder="Confirm password"
                                                                value={confirmPassword}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                                required
                                                            />
                                                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="/login">Have an account? Go to login</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer"></div>
            </div>
        </div>
    );
};

export default Register;
