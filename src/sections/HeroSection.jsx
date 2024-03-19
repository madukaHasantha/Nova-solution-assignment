import React from "react";
import CustomButton from "../components/CustomButton";
import backgroundImage from "../assets/img/image2.png"; // Import the image
import mainTheme from "../themes/theme";

export default function HeroSection() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="py-5 mt-4 bg-cover container-fluid hero-header md:bg-contain" style={{ 
      backgroundImage: `linear-gradient(rgba(248, 223, 173, 0.1), rgba(248, 223, 173, 0.1)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', // Center the background image
      height: '700px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container py-5 md:px-20">
        <div className="grid items-center grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          <div>
            <h1 className="text-4xl text-left md:text-8xl text-secondary md:font-main md:font-regular">Discover</h1>
            <h1 className="mb-3 text-3xl text-left md:mb-5 md:text-6xl text-secondary md:font-main md:font-regular">Timeless Elegance</h1>
            <h5 className="mb-4 text-left md:mb-6 md:font-secondary md:font-medium">
              Discover our stunning selection of rings, brilliant diamonds, and precious<br /> gemstones—the eternal bond of love.
            </h5>
            <div className="relative mx-auto">
              <CustomButton onClick={() => handleClick()}>See All</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
