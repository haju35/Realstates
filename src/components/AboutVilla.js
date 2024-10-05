import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";




const AboutVilla = () => {
  return (
    <section>
      <Navbar />
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <Link to="/villa" className="cat-item d-block bg-light text-center rounded p-3">
        <div className="rounded p-4">
          <div className="icon mb-3">
             {/* This is an image for the Villa Icon */}
            {/* <img className="img-fluid" src={villaIcon} alt="Villa Icon" />*/}
          </div>
          <h6>Villa</h6>
          <span>50 Properties</span>
        </div>
      </Link>
    </div>
    </section>
  );
};

export default AboutVilla;