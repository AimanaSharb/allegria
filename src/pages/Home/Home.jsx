import React from 'react';
import Begin from "./Begin/Begin";
import Collection from "./Collection/Collection";
import Popular from "./Popular/Popular";
import AboutUs from "./AboutUs/AboutUs";


const Home = () => {
    return (
        <main>
         <Begin/>
         <Collection/>
        <Popular/>
        <AboutUs/>
        </main>
    );
};

export default Home;