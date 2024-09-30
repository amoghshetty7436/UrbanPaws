import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; // For carousel functionality
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaStar } from 'react-icons/fa'; // For star ratings
import { useLocation, useParams } from 'react-router-dom';
import Layout1 from '../Layout/Layout1';
import '../styles/Booking.css';

const BookingPage = () => {
    const { name } = useParams();
    const location = useLocation();

    const {
        searchDestination = '',
        searchHotelName = '',
        startDate = null,
        endDate = null,
        numberOfRooms = '',
        numberOfPeople = '',
        numberOfPets = ''
    } = location.state || {};

    const formattedName = name.replace(/-/g, ' ');

    // State for page details
    const [item, setItem] = useState({
        images: [], // Array of image URLs
        description: '',
        location: '',
        rates: [],
        roomTypes: [],
        amenities: [],
        reviews: []
    });

    // Mock data fetching (replace with actual data fetching logic)
    useEffect(() => {
        // Fetch data based on `formattedName` or similar identifier
        // For now, using mock data
        const fetchData = () => {
            // Example data (replace with actual fetch)
            setItem({
                images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'], // Replace with actual URLs
                description: 'Detailed description of the item.',
                location: 'Location of the item',
                rates: ['Standard Rate', 'Deluxe Rate', 'Premium Rate'],
                roomTypes: [
                    { type: 'Standard', description: 'Standard room description', image: 'standard-room.jpg' },
                    { type: 'Deluxe', description: 'Deluxe room description', image: 'deluxe-room.jpg' },
                    { type: 'Premium', description: 'Premium room description', image: 'premium-room.jpg' }
                ],
                amenities: ['Free Wi-Fi', 'Breakfast Included', 'Pool', 'Gym'],
                reviews: [
                    { name: 'John Doe', rating: 4, comment: 'Great place!' },
                    { name: 'Jane Smith', rating: 5, comment: 'Excellent service!' }
                ]
            });
        };

        fetchData();
    }, [formattedName]);

    const handleSearch = () => {
        console.log('Search clicked with:', {
            searchDestination,
            searchHotelName,
            startDate,
            endDate,
            numberOfRooms,
            numberOfPeople,
            numberOfPets
        });
    };

    return (
        <Layout1>
            <div className="booking-page">
            <h1 style={{ color: 'black' }}>{formattedName}</h1>
                {/* Search Form */}
                <div className="search-filter-container">
                    <input
                        type="text"
                        placeholder="Enter destination..."
                        value={searchDestination}
                        onChange={(e) => setSearchDestination(e.target.value)}
                        className="search-box"
                    />
                    <input
                        type="text"
                        placeholder="Enter hotel name..."
                        value={searchHotelName}
                        onChange={(e) => setSearchHotelName(e.target.value)}
                        className="search-box"
                    />
                    <DatePicker
                        selected={startDate ? new Date(startDate) : null}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        startDate={startDate ? new Date(startDate) : null}
                        endDate={endDate ? new Date(endDate) : null}
                        selectsRange
                        minDate={new Date()}
                        placeholderText="Select date range"
                        className="date-picker"
                        dateFormat="MM/dd/yyyy"
                    />
                    <input
                        type="number"
                        min="1"
                        placeholder="Number of rooms"
                        value={numberOfRooms}
                        onChange={(e) => setNumberOfRooms(e.target.value)}
                        className="search-box"
                    />
                    <input
                        type="number"
                        min="1"
                        placeholder="Number of people"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(e.target.value)}
                        className="search-box"
                    />
                    <input
                        type="number"
                        min="0"
                        placeholder="Number of pets"
                        value={numberOfPets}
                        onChange={(e) => setNumberOfPets(e.target.value)}
                        className="search-box"
                    />
                    <button className="fetch-button" onClick={handleSearch}>Search</button>
                </div>
                {/* Image Carousel */}
                <Carousel>
                    {item.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Description and Location */}
                <div className="details-section">
                    <p><strong>Location:</strong> {item.location}</p>
                    <p>{item.description}</p>
                </div>

                {/* Rates and Room Types */}
                <div className="rates-section">
                    <h3>Rates:</h3>
                    <ul>
                        {item.rates.map((rate, index) => (
                            <li key={index}>{rate}</li>
                        ))}
                    </ul>
                    <h3>Room Types:</h3>
                    {item.roomTypes.map((room, index) => (
                        <div key={index} className="room-card">
                            <img src={room.image} alt={room.type} className="room-image" />
                            <h4>{room.type}</h4>
                            <p>{room.description}</p>
                        </div>
                    ))}
                </div>

                {/* Amenities */}
                <div className="amenities-section">
                    <h3>Amenities:</h3>
                    <ul>
                        {item.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>

                {/* Reviews */}
                <div className="reviews-section">
                    <h3>Reviews:</h3>
                    {item.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p><strong>{review.name}</strong> <FaStar color="gold" /> {review.rating}</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout1>
    );
};

export default BookingPage;
