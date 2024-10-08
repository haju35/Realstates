import React from 'react';
import property1 from '../img/villa1.jpg';

function AboutVilla() {
  const sampleVillas = [
    {
      name: "Luxury Villa 1",
      address: "123 Beach St, City",
      price: "$3000/month",
      image: property1,
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5">
          <h1 className="mb-3">Villas</h1>
          <p>Explore our luxurious villas.</p>
        </div>
        <div>
          {sampleVillas.map((villa, index) => (
            <div key={index} className="villa-item bg-light p-3 rounded mb-4">
              <h6>{villa.name}</h6>
              <p>{villa.address}</p>
              <p>Price: {villa.price}</p>
              <img src={villa.image} alt={villa.name} className="img-fluid" style={{ width: '200px', height: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutVilla;
