import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate(); // Hook to navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace this with your API call for authentication
            // Example: const response = await api.login(email, password);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Remember Me:', rememberMe);
            
            // Simulating successful login for demonstration
            // Remove this in production, and replace with actual authentication logic
            if (email && password) {
                onLogin(); // Call the onLogin function to set authenticated state
                navigate('/add-property'); // Redirect to Add Property page
            } else {
                throw new Error('Login failed'); // Simulate login failure
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="bg-light" style={{ height: '100vh' }}>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Login</h3>
                                        </div>
                                        <div className="card-body">
                                            {error && <div className="alert alert-danger">{error}</div>}
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="inputEmail"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                        autoComplete="off" 
                                                    />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>



                                                
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <label htmlFor="inputPassword">Password</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        id="inputRememberPassword"
                                                        type="checkbox"
                                                        checked={rememberMe}
                                                        onChange={() => setRememberMe(!rememberMe)}
                                                    />
                                                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="/forgot-password">Forgot Password?</a>
                                                    <button type="submit" className="btn btn-primary">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="/register">Need an account? Sign up!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    {/* Footer content can be added here */}
                </div>
            </div>
        </div>
    );
};

export default Login;
