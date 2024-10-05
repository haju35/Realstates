// src/components/ApartmentDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApartmentDetail = () => {
    const { id } = useParams(); // Get the apartment ID from the URL
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        // Fetch apartment details from the backend
        const fetchApartmentDetails = async () => {
            try {
                const response = await axios.get(`../apartments`);
                setApartment(response.data);
            } catch (error) {
                console.error("Error fetching apartment details:", error);
            }
        };

        fetchApartmentDetails();
    }, [id]);

    if (!apartment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="apartment-detail">
            <h1>{apartment.name}</h1>
            <img src={apartment.imageUrl} alt={apartment.name} />
            <p>{apartment.description}</p>
            <ul>
                <li><strong>Price:</strong> ${apartment.price}</li>
                <li><strong>Location:</strong> {apartment.location}</li>
                <li><strong>Bedrooms:</strong> {apartment.bedrooms}</li>
                <li><strong>Bathrooms:</strong> {apartment.bathrooms}</li>
                <li><strong>Size:</strong> {apartment.size} sq ft</li>
            </ul>
        </div>
    );
};

export default ApartmentDetail;
