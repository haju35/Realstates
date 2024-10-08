import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import About from './components/About';
import Propertylist from './components/Propertylist';
import AddProperty from './components/AddProperty';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Contact from './components/contact';
import ApartmentPage from './components/ApartmentPage'; 
import Navbar from './components/Navbar';
import AboutApartment from './components/AboutApartment';
import AboutVilla from './components/AboutVilla';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} /> {/* Only one Navbar */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />

        <Route path="/register" element={<Register />} />
        <Route path="/apartments" component={ApartmentPage} />
        <Route path="/AboutApartment" element={<AboutApartment />} />
        <Route path="/AboutVilla" component={<AboutVilla />} />
        <Route path="/propertylist" element={<Propertylist />} />
        <Route path="/add-property" element={isAuthenticated ? <AddProperty /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
