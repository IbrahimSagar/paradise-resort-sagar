import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomContainer from "../components/RoomContainer";

const Gallery = () => {
    return (
        <>
            <Hero hero="roomsHero" >
                <Banner title="Our Gallery" subtitle="Natural Beauty is our priority">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>

    );
};

export default Gallery;