import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import houses from "../houses.json";
import Propertylist from "./Propertylist";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const keyword = query.get("keyword") || "";
  const propertyType = query.get("propertyType") || "";
  const location = query.get("location") || "";
  const priceRange = query.get("priceRange") || "";

  // Convert priceRange to a number if provided
  const parsedPriceRange = priceRange ? parseInt(priceRange.replace(/[^0-9]/g, ""), 10) : null;

  useEffect(() => {
    console.log("Query params:", { keyword, propertyType, location, priceRange });
    console.log("Houses Data:", houses);
  }, [keyword, propertyType, location, priceRange]);

  // Filter houses based on query parameters
  // Ensure filteredHouses is always an array
const filteredHouses = Array.isArray(houses)
? houses.filter((house) => {
    const matchesKeyword =
      keyword === "" ||
      (house.name && house.name.toLowerCase().includes(keyword.toLowerCase()));
    const matchesPropertyType =
      propertyType === "" || (house.category && house.category === propertyType);
    const matchesLocation =
      location === "" || (house.address && house.address.toLowerCase().includes(location.toLowerCase()));
    const matchesPriceRange =
      !parsedPriceRange || (house.price && parseInt(house.price.replace(/[^0-9]/g, "")) <= parsedPriceRange);

    return matchesKeyword && matchesPropertyType && matchesLocation && matchesPriceRange;
  })
: [];


  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row searchResultContainer">
          {filteredHouses.length > 0 ? (
            <Propertylist properties={filteredHouses} />
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
