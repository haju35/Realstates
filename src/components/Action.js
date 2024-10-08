import React, { useState } from 'react';
import action from "../img/call-to-action.jpg";

function Action() {
  const [showPhone, setShowPhone] = useState(false);

  const handleClick = () => {
    setShowPhone(!showPhone);
  };

  return (
    <div id="propertyAgentRedirect" className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded p-3">
          <div className="bg-white rounded p-4" style={{border:'1px dashed rgba(0, 185, 142, .3)'}}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <img className="img-fluid rounded w-100" src={action} alt=""/>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                  <h1 className="mb-3">Contact With Our Certified Agent</h1>
                  <p>
                    Get in touch with our certified agents for expert guidance and personalized service. Whether you're buying or selling, our agents are here to assist you every step of the way. With their in-depth knowledge and dedication, they make the process smooth and stress-free.
                  </p>
                </div>
                {/* Click to Toggle Phone Number */}
                <button onClick={handleClick} className="btn btn-primary py-3 px-4 me-2">
                  <i className="fa fa-phone-alt me-2"></i>Make A Call
                </button>
                {showPhone && <div className="mt-2"><h5>+251 345 67890</h5></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;
