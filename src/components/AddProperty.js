import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProperty() {
    const [property, setProperty] = useState({
        id: Date.now(),
        imgSrc: '',
        type: '',
        category: '',
        price: '',
        address: '',
        size: '',
        beds: '',
        baths: ''
    });

    const [properties, setProperties] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [action, setAction] = useState('');
    const [selectedPropertyId, setSelectedPropertyId] = useState(null);
    const navigate = useNavigate();

    // Load properties from local storage on component mount
    useEffect(() => {
        const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
        setProperties(savedProperties);
    }, []);

    // Handle input changes for property form
    const handleChange = (e) => {
        setProperty({ ...property, [e.target.name]: e.target.value });
    };

    // Handle image resizing and updating imgSrc
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                'JPEG',
                100,
                0,
                (uri) => {
                    setProperty({ ...property, imgSrc: uri });
                },
                'base64'
            );
        }
    };

    // Handle form submission for adding or editing a property
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setAction('submit');
    };

    // Handle property deletion
    const handleDelete = (id) => {
        setShowPopup(true);
        setSelectedPropertyId(id);
        setAction('delete');
    };

    // Confirm the action (add, edit, delete) and update local storage
    const confirmAction = () => {
        let updatedProperties;

        if (action === 'submit') {
            if (isEditing) {
                updatedProperties = properties.map((prop) => (prop.id === property.id ? property : prop));
            } else {
                updatedProperties = [...properties, { ...property, id: Date.now() }];
            }
            localStorage.setItem('properties', JSON.stringify(updatedProperties));
            setProperties(updatedProperties);
            resetForm();
        } else if (action === 'delete') {
            updatedProperties = properties.filter((prop) => prop.id !== selectedPropertyId);
            localStorage.setItem('properties', JSON.stringify(updatedProperties));
            setProperties(updatedProperties);
        }

        setShowPopup(false);
    };

    // Reset form after adding or editing property
    const resetForm = () => {
        setProperty({
            id: Date.now(),
            imgSrc: '',
            type: '',
            category: '',
            price: '',
            address: '',
            size: '',
            beds: '',
            baths: ''
        });
        setIsEditing(false);
    };

    // Handle editing a property
    const handleEdit = (property) => {
        setProperty(property);
        setIsEditing(true);
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="container mt-5">
            {/* Display the logout button */}
            <button className="btn btn-danger mb-3" onClick={handleLogout}>
                Logout
            </button>

            <div className="card shadow-lg border-0 rounded-lg">
                <div className="card-header">
                    <h3 className="text-center">{isEditing ? 'Edit Property' : 'Add Property'}</h3>
                </div>
                <div className="card-body d-flex flex-column flex-md-row">
                    {/* Left Side - Form */}
                    <div className="form-container flex-fill">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Type</label>
                                <input type="text" className="form-control" name="type" value={property.type} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Category</label>
                                <input type="text" className="form-control" name="category" value={property.category} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Price</label>
                                <input type="text" className="form-control" name="price" value={property.price} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Address</label>
                                <input type="text" className="form-control" name="address" value={property.address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Size</label>
                                <input type="text" className="form-control" name="size" value={property.size} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Beds</label>
                                <input type="text" className="form-control" name="beds" value={property.beds} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Baths</label>
                                <input type="text" className="form-control" name="baths" value={property.baths} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label>Image</label>
                                <input type="file" className="form-control" onChange={handleImageChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {isEditing ? 'Update Property' : 'Add Property'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Property List */}
                    <div className="property-list flex-fill mt-4 mt-md-0 ms-md-4">
                        <h5>Property List</h5>
                        <ul className="list-group">
                            {properties.map((prop) => (
                                <li key={prop.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        {prop.category}, {prop.type}, {prop.price}, {prop.address}
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-warning" onClick={() => handleEdit(prop)}>Edit</button>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDelete(prop.id)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm {action}</h5>
                                <button type="button" className="close" onClick={() => setShowPopup(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to {action} this property?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={confirmAction}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddProperty;
