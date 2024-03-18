import React from 'react';
import Navbar from '../../components/NavBar';
import HeroSection from '../../sections/HeroSection';
import Achievements from '../../sections/Achievements';
import Footer from '../../components/Footer';
import ProductSection from '../../sections/ProductSection';
import FollowUs from '../../components/FollowUs';
import Milestone from '../../sections/Milestone';

function HomePage(){
    return(
        <>
         <Navbar/>
         <HeroSection/>
         <Milestone/>
         <Achievements/>
         <ProductSection/>
         <FollowUs/>
         <Footer/>
        </>
    )
}

export default HomePage;