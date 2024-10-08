import React, { useEffect } from 'react';
import about from "../img/building1.jpg";

function Start() {
  useEffect(() => {
    // Initialize popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].forEach(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src={about} alt="About Real Estate" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">Place To Find The Perfect Property</h1>
            <p className="mb-4">
              Discover your dream home with ease. Whether you seek comfort, elegance, or convenience, we have the perfect property for you.
              Explore a variety of homes that offer both beauty and practicality, designed to meet all your needs. From modern interiors to prime
              locations, our properties offer everything you've been searching for.
            </p>
            <p><i className="fa fa-check text-primary me-3"></i>Find the home that suits your style and budget.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Browse our exclusive listings and experience hassle-free property hunting.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Your dream home is just a click away.</p>
            
            {/* Read More Button with Popover */}
            <button 
              className="btn btn-primary py-3 px-5 mt-3" 
              data-bs-toggle="popover" 
              data-bs-html="true" 
              data-bs-content={
                `<div>
                  <h5>About Our Real Estate</h5>
                  <p>Our real estate agency is dedicated to helping you find your ideal home. 
                  We offer a wide range of properties, from luxurious apartments to cozy family homes. 
                  Our team of experts is here to provide personalized service and ensure a seamless buying or selling experience.</p>
                  <p>Contact us today to learn more about how we can assist you!</p>
                </div>`
              }
              data-bs-title="More About Us"
              style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
