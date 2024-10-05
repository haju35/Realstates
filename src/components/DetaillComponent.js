import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from "./Navbar";
import 'leaflet/dist/leaflet.css';

const apartments = [
  { id: 1, name: 'Luxury Villa Paradise', location: 'San Diego', price: 2500, beds: 2, baths: 2, size: 400, description: 'A stunning masterpiece of luxury and art...', address: 'Street 10, San Diego, US', lat: 32.7157, lng: -117.1611 },
  { id: 2, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 3, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 4, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 5, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 6, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 7, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  { id: 8, name: 'Oceanview Penthouse', location: 'Miami', price: 3000, beds: 3, baths: 3, size: 600, description: 'Penthouse with panoramic ocean views...', address: 'Beachfront, Miami, US', lat: 25.7617, lng: -80.1918 },
  
  
  // Add more apartments
];

const DetailComponent = () => {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  const position = [apartment.lat, apartment.lng];

  return (
    <section>
    <Navbar />
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>{apartment.name}</h2>
          <p><strong>Location:</strong> {apartment.location}</p>
          <p><strong>Price:</strong> ${apartment.price}</p>
          <p><strong>Beds:</strong> {apartment.beds}</p>
          <p><strong>Baths:</strong> {apartment.baths}</p>
          <p><strong>Size:</strong> {apartment.size} sq ft</p>
          <p><strong>Description:</strong> {apartment.description}</p>
          <p><strong>Address:</strong> {apartment.address}</p>
          <button className="btn btn-primary">Book the visit</button>
        </div>
        <div className="col-md-6">
          <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{apartment.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DetailComponent;
