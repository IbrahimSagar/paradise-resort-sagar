import React from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
    return (
        <React.Fragment>
        <Hero>
            <Banner title="Luxurious place for you" subtitle="deluxe rooms starting at $399">
                <Link to='/rooms' className="btn-primary">
                    Our rooms
                </Link>
            </Banner>
        </Hero>
            <Services></Services>
        <FeaturedRooms />
        </React.Fragment>
    );
};

export default Home;