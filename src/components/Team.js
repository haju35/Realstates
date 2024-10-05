import team from "../img/team-1.jpg"
import team2 from "../img/team-2.jpg"
import team3 from "../img/team-3.jpg"
import team4 from "../img/team-4.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Team() {
  return (
   
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h1 className="mb-3">Property Agents</h1>
            <p>Our dedicated property agents are here to guide you every step of the way. With expertise and experience, they ensure a smooth process from start to finish. Whether you're buying, selling, or renting, our agents are committed to finding the best opportunities for you.</p>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={team} alt="/"/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <a className="btn btn-square mx-1" href="/"><FaFacebookF /></a>
                            <a className="btn btn-square mx-1" href="/"><FaTelegramPlane /></a>
                            <a className="btn btn-square mx-1" href="/"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">NURAYEN ABDULSEMED</h5>
                        <small>Real Estate Consultant</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={team2} alt="/"/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                        <a className="btn btn-square mx-1" href="/"><FaFacebookF /></a>
                            <a className="btn btn-square mx-1" href="/"><FaTelegramPlane /></a>
                            <a className="btn btn-square mx-1" href="/"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">HAJIRA SIRAJ</h5>
                        <small>Property Advisor</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={team3} alt="/"/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                        <a className="btn btn-square mx-1" href="/"><FaFacebookF /></a>
                            <a className="btn btn-square mx-1" href="/"><FaTelegramPlane /></a>
                            <a className="btn btn-square mx-1" href="/"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">MAHDER ESHETU</h5>
                        <small>Property Manager</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={team4} alt="/"/>
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                        <a className="btn btn-square mx-1" href="/"><FaFacebookF /></a>
                            <a className="btn btn-square mx-1" href="/"><FaTelegramPlane /></a>
                            <a className="btn btn-square mx-1" href="/"><FaInstagram /></a>
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
  )
}

export default Team
