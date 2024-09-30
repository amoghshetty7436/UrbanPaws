import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import '../styles/FeaturedLocation.css';

const FeaturedLocations = ({ data, searchFilters, isBlogsPage }) => {
    const [searchDestination, setSearchDestination] = useState('');
    const [searchHotelName, setSearchHotelName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [numberOfPets, setNumberOfPets] = useState('');

    const navigate = useNavigate(); // React Router hook

    const handleSearch = () => {
        console.log("Search button clicked with criteria:", { searchDestination, searchHotelName, startDate, endDate, numberOfRooms, numberOfPeople, numberOfPets });
    };

    const handleReadNow = (item) => {
        navigate(`/blog/${encodeURIComponent(item.id)}`); // Navigate to the blog post page
    };

    const handleBookNow = (item) => {
        navigate(`/booking/${encodeURIComponent(item.name)}`, {
            state: {
                searchDestination: item.destination,
                searchHotelName: item.name,
                startDate: item.startDate ? new Date(item.startDate).toISOString() : '',
                endDate: item.endDate ? new Date(item.endDate).toISOString() : '',
                numberOfRooms: item.numberOfRooms || '',
                numberOfPeople: item.numberOfPeople || '',
                numberOfPets: item.numberOfPets || ''
            }
        });
    };

    const filteredData = data.filter((item) => {
        let matchesDestination = true;
        let matchesHotelName = true;

        if (searchFilters.includes('destination')) {
            matchesDestination = item.destination.toLowerCase().includes(searchDestination.toLowerCase());
        }

        if (searchFilters.includes('hotelName')) {
            matchesHotelName = item.name.toLowerCase().includes(searchHotelName.toLowerCase());
        }

        return matchesDestination && matchesHotelName;
    });

    return (
        <div className="featured-locations">
            {!isBlogsPage && (
                <div className="search-filter-container">
                    {searchFilters.includes('destination') && (
                        <input
                            type="text"
                            placeholder="Enter destination..."
                            value={searchDestination}
                            onChange={(e) => setSearchDestination(e.target.value)}
                            className="search-box"
                        />
                    )}
                    {searchFilters.includes('hotelName') && (
                        <input
                            type="text"
                            placeholder="Enter hotel name..."
                            value={searchHotelName}
                            onChange={(e) => setSearchHotelName(e.target.value)}
                            className="search-box"
                        />
                    )}
                    {searchFilters.includes('date') && (
                        <DatePicker
                            selected={startDate}
                            onChange={(dates) => {
                                const [start, end] = dates;
                                setStartDate(start);
                                setEndDate(end);
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            minDate={new Date()} // Prevent selecting past dates
                            placeholderText="Select date range"
                            className="date-picker"
                            dateFormat="MM/dd/yyyy"
                        />
                    )}
                    {searchFilters.includes('rooms') && (
                        <input
                            type="number"
                            min="1"
                            placeholder="Number of rooms"
                            value={numberOfRooms}
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                            className="search-box"
                        />
                    )}
                    {searchFilters.includes('people') && (
                        <input
                            type="number"
                            min="1"
                            placeholder="Number of people"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(e.target.value)}
                            className="search-box"
                        />
                    )}
                    {searchFilters.includes('pets') && (
                        <input
                            type="number"
                            min="0"
                            placeholder="Number of pets"
                            value={numberOfPets}
                            onChange={(e) => setNumberOfPets(e.target.value)}
                            className="search-box"
                        />
                    )}
                    {!isBlogsPage && (
                        <button className="fetch-button" onClick={handleSearch}>Fetch</button>
                    )}
                </div>
            )}
            <div className="grid-container">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item.id} className="grid-item">
                            <div className="grid-image-container">
                                <img src={item.imageUrl} alt={item.name} className="grid-image" />
                            </div>
                            <div className="grid-content">
                                <h3>{item.name}</h3>
                                <p className='description'>{item.description}</p>
                                <div className="rating">
                                    <ReactStars
                                        count={5}
                                        value={item.rating}
                                        size={24}
                                        edit={false}
                                        color2="#ffd700"
                                    />
                                    <span className="rating-text">({item.rating.toFixed(1)})</span>
                                </div>
                                {isBlogsPage ? (
                                    <>
                                        <button
                                            className="book-button"
                                            onClick={() => handleReadNow(item)} // Pass entire item to handleReadNow
                                        >
                                            Read Now
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="book-button"
                                        onClick={() => handleBookNow(item)} // Pass entire item to handleBookNow
                                    >
                                        Book Now
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedLocations;
