import React from "react";
import { useLocation } from "react-router-dom";
import houses from "./data/houses.json"; // Ensure the correct path to your JSON data
import Propertylist from "./Propertylist";

// Custom hook to extract query parameters from the URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const keyword = query.get("keyword") || "";
  const propertyType = query.get("propertyType") || "";
  const location = query.get("location") || "";
  const priceRange = query.get("priceRange") || "";

  // Convert priceRange to a number if it's provided
  const parsedPriceRange = priceRange ? parseInt(priceRange.replace(/[^0-9]/g, ""), 10) : null;

  // Filter houses based on the query parameters (ALL must match)
  const filteredHouses = Array.isArray(houses)
    ? houses.filter((house) => {
        const matchesKeyword =
          keyword === "" ||
          (house.name && house.name.toLowerCase().includes(keyword.toLowerCase()));
        const matchesPropertyType =
          propertyType === "" || (house.category && house.category === propertyType);
        const matchesLocation =
          location === "" ||
          (house.address && house.address.toLowerCase().includes(location.toLowerCase()));
        const matchesPriceRange =
          parsedPriceRange === null || (house.price && house.price <= parsedPriceRange);

        // Only include houses if ALL criteria match
        return matchesKeyword && matchesPropertyType && matchesLocation && matchesPriceRange;
      })
    : [];

    return (
      <div className="container">
        <h2>Search Results</h2>
        {filteredHouses.length > 0 ? (
          <Propertylist properties={filteredHouses} />
        ) : (
          <p>No properties found matching the search criteria.</p>
        )}
      </div>
    );
    
}

export default SearchPage;
