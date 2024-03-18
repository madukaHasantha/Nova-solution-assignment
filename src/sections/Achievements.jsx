import React from 'react';
import CustomButton from '../components/CustomButton';
import image3 from '../assets/img/image3.png';

function Achievements() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="container-fluid px-20 py-5 mb-5">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="md:w-3/4 relative">
                <img src={image3} alt="chain" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <h1 className="mb-2 text-secondary text-start md:text-left" style={{ fontSize: '64px', lineHeight: '76px' }}>
                Jewellery that as beautiful as you are
              </h1>
              <h5 className="mb-8 text-lg md:text-xl text-dark text-start md:text-left">
                Discover our stunning selection of rings, brilliant diamonds,
                and precious gemstones the eternal bond of love
              </h5>
              <div className="text-start md:text-left">
                <CustomButton onClick={() => handleClick()}>
                  See All
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Achievements;
