import team from "../img/nur.jpg";
import team2 from "../img/haju.jpg";
import team3 from "../img/mahi.jpg";
import team4 from "../img/team-4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Team() {
  const imageStyle = {
    width: '250px',  // Set your desired width
    height: '250px', // Set your desired height
    objectFit: 'cover', // Ensures the image fills the space without distortion
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Property Agents</h1>
          <p>Our dedicated property agents are here to guide you every step of the way. With expertise and experience, they ensure a smooth process from start to finish. Whether you're buying, selling, or renting, our agents are committed to finding the best opportunities for you.</p>
        </div>
        <div className="row g-4">
          
          {/* Agent 1 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={team} alt="Team Member" style={imageStyle} />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href="https://facebook.com/nurayen" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a className="btn btn-square mx-1" href="https://t.me/nurayen" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                  <a className="btn btn-square mx-1" href="https://instagram.com/nurayen" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">NURAYEN ABDULSEMED</h5>
                <small>Real Estate Consultant</small>
              </div>
            </div>
          </div>
          
          {/* Agent 2 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={team2} alt="Team Member" style={imageStyle} />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href="https://facebook.com/hajira" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a className="btn btn-square mx-1" href="https://t.me/hajira" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                  <a className="btn btn-square mx-1" href="https://instagram.com/hajira" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">HAJIRA SIRAJ</h5>
                <small>Property Advisor</small>
              </div>
            </div>
          </div>
          
          {/* Agent 3 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={team3} alt="Team Member" style={imageStyle} />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href="https://facebook.com/mahdere" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a className="btn btn-square mx-1" href="https://t.me/mahdere" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                  <a className="btn btn-square mx-1" href="https://instagram.com/mahdere" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">MAHDER ESHETU</h5>
                <small>Property Manager</small>
              </div>
            </div>
          </div>
          
          {/* Agent 4 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={team4} alt="Team Member" style={imageStyle} />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href="https://facebook.com/eyassu" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a className="btn btn-square mx-1" href="https://t.me/eyassu" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                  <a className="btn btn-square mx-1" href="https://instagram.com/eyassu" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">EYASSU MELESE</h5>
                <small>Real Estate Representative</small>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
