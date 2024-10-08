import React from 'react';
import Propertylist from './Propertylist'; // Assuming Propertylist is your component to show property details
import houses from './data/houses.json'; // Import your houses data

function ApartmentPage() {
  // Filter the apartments from the list
  const apartments = houses.filter((house) => house.type === 'Apartment');

  return (
    <div className="container">
      <h1>Available Apartments</h1>
      <Propertylist properties={apartments} />
    </div>
  );
}

export default ApartmentPage;
