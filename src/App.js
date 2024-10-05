import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import About from './components/about';
import AboutApartment from './components/AboutApartment';
import AboutVilla from './components/AboutVilla';
import AboutHome from './components/AboutHome';
import AboutBuilding from './components/AboutBuilding';
import AboutOffice from './components/AboutOffice';
import AboutTownhouse from './components/AboutTownhouse';
import AboutShop from './components/AboutShop';
import AboutGarage from './components/AboutGarage';
import Propertylist from './components/Propertylist';
import DetailComponent from './components/DetaillComponent';
import Login from './components/Login';
import Register from './components/Register';




function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/apartments" element={<AboutApartment/>} />
        <Route path="/villa" element={<AboutVilla/>} />
        <Route path="/home" element={<AboutHome/>} />
        <Route path="/Building" element={<AboutBuilding/>} />
        <Route path="/office" element={<AboutOffice/>} />
        <Route path="/Townhouse" element={<AboutTownhouse/>} />
        <Route path="/Shop" element={<AboutShop/>} />
        <Route path="/Garage" element={<AboutGarage/>} />
        <Route path="/" element={<Propertylist />} />
        <Route path="/apartment/:id" element={<DetailComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
    </Router>
  );
}

export default App;
