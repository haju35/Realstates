import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      keyword,
      propertyType,
      location,
      priceRange,
    }).toString();

    navigate(`/search?${queryParams}`);
  };

  return (
    <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10">
            <div className="row g-2 align-items-center">
              <div className="col-12 col-md-3">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-3">
                <select
                  className="form-select border-0 py-3"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Cabin">Cabin</option>
                </select>
              </div>
              <div className="col-12 col-md-3">
                <select
                  className="form-select border-0 py-3"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  <option value="Addis Ababa,Bole">Addis Ababa, Bole</option>
                  <option value="Addis Ababa,Gergi">Addis Ababa, Gergi</option>
                  <option value="Addis Ababa,Jemo">Addis Ababa, Jemo</option>
                  <option value="Addis Ababa,Piassa">Addis Ababa, Piassa</option>
                  <option value="Addis Ababa,CMC">Addis Ababa, CMC</option>
                  <option value="Addis Ababa,Wesen">Addis Ababa, Wesen</option>
                </select>
              </div>
              <div className="col-12 col-md-3">
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Price Range"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 text-md-end mt-3 mt-md-0">
            <button className="btn btn-dark border-0 w-100 py-3" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
