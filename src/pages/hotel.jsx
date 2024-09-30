import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import hotelData from '../data/hotelData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Hotels = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={hotelData}
                searchFilters={['destination', 'hotelName', 'date', 'rooms', 'people', 'pets']}
            />
        </Layout1>
    );
};

export default Hotels;
