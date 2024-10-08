import icon1 from "../img/icon-apartment.png"
import icon2 from "../img/icon-villa.png"
import icon3 from "../img/icon-house.png"
import icon4 from "../img/icon-housing.png"
import icon5 from "../img/icon-building.png"
import icon6 from "../img/icon-neighborhood.png"
import icon7 from "../img/icon-condominium.png"
import icon8 from "../img/icon-luxury.png"
import { Link } from 'react-router-dom';
function catagory() {
  return (
    <div  class="container-xxl py-5" id="propertyTypeRedirect">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 class="mb-3">Property Types</h1>
                    <p>Learn about the different types of properties we manage.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <Link to="/AboutApartment" className="cat-item d-block bg-light text-center rounded p-3">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon1} alt="Icon"/>
                                </div>
                                <h6>Apartment</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <Link to="/AboutVilla" className="cat-item d-block bg-light text-center rounded p-3">

                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={ icon2} alt="Icon"/>
                                </div>
                                <h6>Villa</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">

                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/home">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon3} alt="Icon"/>
                                </div>
                                <h6>Home</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                        
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/office">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon4} alt="Icon"/>
                                </div>
                                <h6>Office</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/Building">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon5} alt="Icon"/>
                                </div>
                                <h6>Building</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/Townhouse">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon6} alt="Icon"/>
                                </div>
                                <h6>Townhouse</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/Townhouse">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon7} alt="Icon"/>
                                </div>
                                <h6>Shop</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="/Garage">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src={icon8} alt="Icon"/>
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default catagory
