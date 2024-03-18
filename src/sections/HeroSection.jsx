import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../components/CustomButton";
import backgroundImage from "../assets/img/image2.png"; // Import the image
import mainTheme from "../themes/theme";

export default function HeroSection() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="container-fluid py-5  mt-4 hero-header bg-cover md:bg-contain" style={{ 
        backgroundImage: `linear-gradient(rgba(248, 223, 173, 0.1), rgba(248, 223, 173, 0.1)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Center the background image
        height: '700px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container py-5" style={{ paddingLeft: '100px'}}>
          <div className="row g-5 align-items-left">
            <div className="col-md-12 col-lg-6">
              <h1 className="text-8xl text-secondary text-left" style={{fontSize: '96px', marginTop: '-200px', fontFamily: mainTheme.typography.mainFont, fontWeight: mainTheme.fontWeight.regular}}>Discover</h1>
              <h1 className="mb-5 text-6xl text-secondary text-left" style={{ fontSize: '64px', fontFamily: mainTheme.typography.mainFont, fontWeight: mainTheme.fontWeight.regular}}>Timeless Elegance</h1>
              <h5 className="mb-6 text-left" style={{ fontSize: '16px', fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.medium}}>
                Discover our stunning selection of rings, brilliant diamonds, and precious<br></br> gemstones—the eternal bond of love.
              </h5>
              <div className="relative mx-auto">
                <CustomButton onClick={() => handleClick()}>See All</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
