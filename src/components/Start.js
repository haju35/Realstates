import about from "../img/about.jpg"

function start() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                    <img className="img-fluid w-100" src={about} alt=""/>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4"> Place To Find The Perfect Property</h1>
                <p className="mb-4">Discover your dream home with ease. Whether you seek comfort, elegance, or convenience, we have the perfect property for you. Explore a variety of homes that offer both beauty and practicality, designed to meet all your needs. From modern interiors to prime locations, our properties offer everything you've been searching for.</p>
                <p><i className="fa fa-check text-primary me-3"></i>Find the home that suits your style and budget.</p>
                <p><i className="fa fa-check text-primary me-3"></i>Browse our exclusive listings and experience hassle-free property hunting.</p>
                <p><i className="fa fa-check text-primary me-3"></i>Your dream home is just a click away.</p>
                <a className="btn btn-primary py-3 px-5 mt-3" href="/">Read More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default start
