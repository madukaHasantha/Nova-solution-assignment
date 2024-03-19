import React from 'react';
import CustomButton from '../components/CustomButton';
import image3 from '../assets/img/image3.png';

function Achievements() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="container px-4 py-5 mx-auto md:py-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="ml-5 md:w-1/2">
            <div className="relative ml-12 md:w-3/4">
              <img src={image3} alt="chain" className="w-full " />
            </div>
          </div>
          <div className="mt-4 md:w-1/2 md:mt-0 md:ml-auto">
            <h1 className="mb-2 text-3xl leading-tight text-secondary md:text-left md:text-5xl">
              Jewellery that as <br></br> beautiful as you are
            </h1>
            <h5 className="mb-8 text-lg md:text-xl text-dark md:text-left">
              Discover our stunning selection of rings, brilliant diamonds,
              and precious gemstones the eternal bond of love
            </h5>
            <div className=" md:text-left">
              <CustomButton onClick={() => handleClick()}>
                See All
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
