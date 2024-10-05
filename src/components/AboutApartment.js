import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const AboutApartment = () => {
  return (
    <section>
      <Navbar />
    <Link to="/apartments" className="text-decoration-none">
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Our Apartments</h1>
      <p className="lead text-center mb-4">
        Discover a variety of apartments that meet your needs and lifestyle.
      </p>

      <h2 className="h3 mt-4">Types of Apartments</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="studio.jpg" className="card-img-top" alt="Studio Apartment" />
            <div className="card-body">
              <h5 className="card-title">Studio Apartments</h5>
              <p className="card-text">
                Perfect for singles or couples. 
              </p>
              <Link to="/apartments/1" className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="one-bedroom.jpg" className="card-img-top" alt="One Bedroom Apartment" />
            <div className="card-body">
              <h5 className="card-title">One Bedroom Apartments</h5>
              <p className="card-text">
                Ideal for those seeking a little more space.
              </p>
              <Link to="/apartments/2" className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="two-bedroom.jpg" className="card-img-top" alt="Two Bedroom Apartment" />
            <div className="card-body">
              <h5 className="card-title">Two Bedroom Apartments</h5>
              <p className="card-text">
                Great for families or roommates.
              </p>
              <Link to="/apartments/3" className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </section>
  );
};

export default AboutApartment;