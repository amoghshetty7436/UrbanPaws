import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import activitiesData from '../data/activitiesData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Activities = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={activitiesData}
                searchFilters={['destination', 'name', 'date', 'time', 'pets']}
            />
        </Layout1>
    );
};

export default Activities;
