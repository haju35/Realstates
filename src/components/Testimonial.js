import testimonies from "../img/testimonial-1.jpg"
import testimonies2 from "../img/testimonial-2.jpg"
import testimonies3 from "../img/testimonial-3.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

function Testimonial() {
  return (
    <div id = "testimonials" class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}/>
            <h1 class="mb-3">Our Clients Say!</h1>
            <p>The service was exceptional! They guided me through every step of the process, making it easy and stress-free.</p>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} slidesToSlide={2}>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>I appreciate the professionalism and dedication. They made sure I was well-informed throughout the buying process</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies} style={{width: '45px', height: '45px'}} alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">Michae</h6>
                            <small>Realtor</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>The team was incredibly supportive and patient. They answered all my questions and helped me find my dream home.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies2} style={{width: '45px', height: '45px'}}alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">HAJU</h6>
                            <small>First-Time Homebuyer</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>Working with them has been a game-changer. Their expertise in the market is unmatched.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies3} style={{width: '45px', height: '45px'}}alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">NUR</h6>
                            <small>
                            Property Manager</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>I highly recommend their services! They are reliable and truly care about their clients</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies} style={{width: '45px', height: '45px'}} alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">Client Name</h6>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>Their knowledge of the real estate market is impressive. They helped me secure a great deal.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies2} style={{width: '45px', height: '45px'}}alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">MAHI</h6>
                            <small>Real Estate Agent</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                    <p>I was amazed by their attention to detail. They went above and beyond to meet my expectations.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded" src={testimonies3} style={{width: '45px', height: '45px'}}alt=""/>
                        <div class="ps-3">
                            <h6 class="fw-bold mb-1">JOSH</h6>
                            <small>Investor</small>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>

  )
}

export default Testimonial
