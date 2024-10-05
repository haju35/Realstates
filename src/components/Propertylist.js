import { Link } from 'react-router-dom';
import property1 from "../img/property-1.jpg";
import property2 from "../img/property-2.jpg";
import property3 from "../img/property-3.jpg";
import property4 from "../img/property-4.jpg";

const properties = [
  { id: 1, imgSrc: property1, type: 'For Sell', category: 'Appartment', price: '$12,345', address: 'Wesen, Addis Ababa, Ethiopia', size: '1000 m', beds: '3 Bed', baths: '2 Bath' },
  { id: 2, imgSrc: property2, type: 'For Rent', category: 'Villa', price: '$12,345', address: 'Bole, Addis Ababa, Ethiopia', size: '1000 m', beds: '3 Bed', baths: '2 Bath' },
  { id: 3, imgSrc: property3, type: 'For Sell', category: 'Office', price: '$12,345', address: 'Gerji, Addis Ababa, Ethiopia', size: '1000 m', beds: '3 Bed', baths: '2 Bath' },
  { id: 4, imgSrc: property4, type: 'For Rent', category: 'Building', price: '$12,345', address: 'Piassa, Addis Ababa, Ethiopia', size: '1000 m', beds: '3 Bed', baths: '2 Bath' }
];

function Propertylist() {
  return (
    <div className="container-xxl py-5" id="propertyListRedirect">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
              <h1 className="mb-3">Property Listing</h1>
              <p>Here are different kinds of properties you can explore a lot more with surprising prices and beautiful views.</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {properties.map(property => (
            <div key={property.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to={`/apartment/${property.id}`}>
                    <img className="img-fluid" src={property.imgSrc} alt={`Property ${property.id}`} />
                  </Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.type}</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.category}</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">{property.price}</h5>
                  <Link className="d-block h5 mb-2" to={`/apartment/${property.id}`}>{property.address}</Link>
                  <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.address}</p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.size}</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.beds}</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.baths}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Propertylist;
