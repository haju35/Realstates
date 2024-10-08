import React, { useState } from 'react';
import property1 from '../img/property-1.jpg'; 
import property2 from '../img/property-2.jpg';
import property3 from '../img/property-3.jpg';
import property5 from '../img/property-5.jpg';
import property4 from '../img/property-4.jpg';
import property6 from '../img/property-6.jpg';// Removed useEffect import

function AboutApartment() {
  const sampleApartments = [
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property1, // Ensure you have this image in your public/img folder
    },
    {
      name: "Cozy Apartment",
      address: "456 Oak St, City",
      price: "$800/month",
      image: property2, // Ensure you have this image in your public/img folder
    },
    {
      name: "Modern Apartment",
      address: "789 Pine St, City",
      price: "$1500/month",
      image: property3, // Ensure you have this image in your public/img folder
    },
    {
      name: "Charming Studio",
      address: "321 Maple St, City",
      price: "$700/month",
      image: property4,// Ensure you have this image in your public/img folder
    },
    {
      name: "Spacious Loft",
      address: "654 Elm St, City",
      price: "$1800/month",
      image: property5, // Ensure you have this image in your public/img folder
    },
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property6, // Ensure you have this image in your public/img folder
    },
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property1, // Ensure you have this image in your public/img folder
    },
    {
      name: "Cozy Apartment",
      address: "456 Oak St, City",
      price: "$800/month",
      image: property2, // Ensure you have this image in your public/img folder
    },
    {
      name: "Modern Apartment",
      address: "789 Pine St, City",
      price: "$1500/month",
      image: property3, // Ensure you have this image in your public/img folder
    },
    {
      name: "Charming Studio",
      address: "321 Maple St, City",
      price: "$700/month",
      image: property4,// Ensure you have this image in your public/img folder
    },
    {
      name: "Spacious Loft",
      address: "654 Elm St, City",
      price: "$1800/month",
      image: property5, // Ensure you have this image in your public/img folder
    },
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property6, // Ensure you have this image in your public/img folder
    },
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property1, // Ensure you have this image in your public/img folder
    },
    {
      name: "Cozy Apartment",
      address: "456 Oak St, City",
      price: "$800/month",
      image: property2, // Ensure you have this image in your public/img folder
    },
    {
      name: "Modern Apartment",
      address: "789 Pine St, City",
      price: "$1500/month",
      image: property3, // Ensure you have this image in your public/img folder
    },
    {
      name: "Charming Studio",
      address: "321 Maple St, City",
      price: "$700/month",
      image: property4,// Ensure you have this image in your public/img folder
    },
    {
      name: "Spacious Loft",
      address: "654 Elm St, City",
      price: "$1800/month",
      image: property5, // Ensure you have this image in your public/img folder
    },
    {
      name: "Luxury Apartment 1",
      address: "123 Main St, City",
      price: "$1200/month",
      image: property6, // Ensure you have this image in your public/img folder
    }
  ];

  const [apartments] = useState(sampleApartments); // Removed setApartments

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5">
          <h1 className="mb-3">Apartments</h1>
          <p>Browse through the list of available apartments.</p>
        </div>
        <div className="row g-4">
          {apartments.map((apartment, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="apartment-item bg-light p-3 rounded">
                <img src={apartment.image} alt={apartment.name} className="img-fluid mb-3" />
                <h6>{apartment.name}</h6>
                <p>{apartment.address}</p>
                <p>Price: {apartment.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutApartment;
