import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import servicesData from '../data/servicesData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Services = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={servicesData}
                searchFilters={['destination', 'name', 'date', 'time', 'pets']}
            />
        </Layout1>
    );
};

export default Services;
