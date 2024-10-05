import React from 'react'
import icon from "../img/icon-deal.png"
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <div className="container-fluid nav-bar bg-transparent">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
                <img className="img-fluid" src={icon} alt="Icon" style={{width: '30px', height: '30px'}}/>
            </div>
            <h1 className="m-0 text-primary">AAA</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                
                <Link to="/about" className="nav-item nav-link">About</Link>


                <div className="nav-item dropdown">
                    <a href="/#" className="nav-link" data-bs-toggle="dropdown">Property <FaCaretDown /></a>
                    <div className="dropdown-menu rounded-0 m-0">
                        <a href="/#propertyListRedirect" className="dropdown-item">Property List</a>
                        <a href="/#propertyTypeRedirect" className="dropdown-item">Property Type</a>
                        <a href="/#propertyAgentRedirect" className="dropdown-item">Property Agent</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a href="/#" className="nav-link" data-bs-toggle="dropdown">Pages <FaCaretDown /></a>
                    <div className="dropdown-menu rounded-0 m-0">
                        <a href="/#testimonials" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Error</a>
                    </div>
                </div>
                <a href="/#footer" className="nav-item nav-link">Contact</a>
            </div>
            <a href="/login" className="btn btn-primary px-3 d-none d-lg-flex">Sign In</a>
        </div>
    </nav>
</div>
  )
}

export default Navbar
