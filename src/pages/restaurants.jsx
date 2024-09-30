// src/pages/Restaurants.js
import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import restaurantData from '../data/restaurantData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Restaurants = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={restaurantData}
                searchFilters={['destination', 'restaurantName', 'date', 'time', 'people', 'pets']}
            />
        </Layout1>
    );
};

export default Restaurants;
