import React from 'react';
import FeaturedLocations from '../components/FeaturedLocation';
import blogData from '../data/blogsData'; // Adjust the import path as needed
import Layout1 from '../Layout/Layout1';

const Blogs = () => {
    return (
        <Layout1>
            <FeaturedLocations
                data={blogData}
                searchFilters={[]} // No search filters for blogs
                isBlogsPage={true} // Pass isBlogsPage as true
            />
        </Layout1>
    );
};

export default Blogs;
