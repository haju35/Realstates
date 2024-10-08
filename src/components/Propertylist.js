import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Propertylist() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]); // State for filtered properties
    const [selectedType, setSelectedType] = useState('All'); // State for selected Type (Sell/Rent)

    useEffect(() => {
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
        console.log("Loaded Properties:", storedProperties); // Log loaded properties from localStorage
        setProperties(storedProperties);
        setFilteredProperties(storedProperties); // Initialize with all properties
    }, []);
    
    useEffect(() => {
        console.log("Selected Type:", selectedType); // Log the selected Type
        if (selectedType === 'All') {
            setFilteredProperties(properties); // Show all properties if 'All' is selected
        } else {
            const filtered = properties.filter(property => 
                property.type.toLowerCase() === selectedType.toLowerCase()
            );
            console.log("Filtered Properties:", filtered); // Log filtered properties
            setFilteredProperties(filtered);
        }
    }, [selectedType, properties]);
    
    

    return (
        <div className="container-xxl py-5" id="propertyListRedirect">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Property Listing</h1>
                            <p>Here are different kinds of properties you can explore with surprising prices and beautiful views.</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
    <div className="col-12">
        <button 
            className="btn btn-primary me-2" 
            onClick={() => {
                console.log("Clicked: All");
                setSelectedType('All');
            }}>
            All
        </button>
        <button 
            className="btn btn-primary me-2" 
            onClick={() => {
                console.log("Clicked: For Sell");
                setSelectedType('For Sell');
            }}>
            For Sell
        </button>
        <button 
            className="btn btn-primary me-2" 
            onClick={() => {
                console.log("Clicked: For Rent");
                setSelectedType('For Rent');
            }}>
            For Rent
        </button>
    </div>
</div>


                <div className="row g-4">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <Link to={`/apartment/${index}`}>
                                            <img className="img-fluid property-image" src={property.imgSrc} alt={`Property ${index}`} />
                                        </Link>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.type}</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{property.category}</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">{property.price}</h5>
                                        <Link className="d-block h5 mb-2" to={`/apartment/${index}`}>{property.address}</Link>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.address}</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{property.size}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{property.beds}</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{property.baths}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>No properties found that match your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Propertylist;
