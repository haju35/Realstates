import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouse from "../img/b2.jpg"
import carouse2 from "../img/building1.jpg"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Header() {
   return (
    <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p className="animated fadeIn mb-4 pb-2">Our innovative platform connects users with the best local services, ensuring quality and satisfaction.</p>
                    <a href="/#propertyTypeRedirect" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <Carousel customTransition="transform 1000ms ease-in-out" infinite={true} autoPlay={true} autoPlaySpeed={5000} responsive={responsive}>
                        <div>
                            <img className="img-fluid" src={carouse} alt="/"/>
                        </div>
                        <div>
                            <img className="img-fluid" src={carouse2} alt="/"/>
                        </div>
                        <div>
                            <img className="img-fluid" src={carouse} alt="/"/>
                        </div>
                        <div>
                            <img className="img-fluid" src={carouse2} alt="/"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
  )
}

export default Header
