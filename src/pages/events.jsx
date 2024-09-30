import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import eventsData from '../data/eventsData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Events = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={eventsData}
                searchFilters={['destination', 'name', 'date', 'time', 'pets']}
            />
        </Layout1>
    );
};

export default Events;
