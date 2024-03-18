import React from 'react';
import Navbar from '../../components/NavBar';
import HeroSection from '../../sections/HeroSection';
import Achievements from '../../sections/Achievements';
import Footer from '../../components/Footer';

function HomePage(){
    return(
        <>
         <Navbar/>
         <HeroSection/>
         <Achievements/>
         <Footer/>
        </>
    )
}

export default HomePage;