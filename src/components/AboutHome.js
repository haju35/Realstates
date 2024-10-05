import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


const AboutHome = () => {
  return (
    <section>
      <Navbar />
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <Link to="/home" className="cat-item d-block bg-light text-center rounded p-3">
        <div className="rounded p-4">
          <div className="icon mb-3">

          </div>
          <h6>Home</h6>
          <span>20 Properties</span>
        </div>
      </Link>
    </div>
    </section>
  );
};

export default AboutHome;