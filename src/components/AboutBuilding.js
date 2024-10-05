import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


const AboutBuilding = () => {
  return (
    <section>
      <Navbar />
    <div className="col-lg-3 col-sm-6 wow fadeInUp">
      <Link to="/buildings/1" className="cat-item d-block bg-light text-center rounded p-3">
        <div className="rounded p-4">
          <div className="icon mb-3">
           
          </div>
          <h6>Building</h6>
          <span>10 Properties</span>
        </div>
      </Link>
    </div>
    </section>
  );
};

export default AboutBuilding;