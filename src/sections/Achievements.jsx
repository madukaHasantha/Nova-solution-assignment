import React from 'react';
import CustomButton from '../components/CustomButton';
import image3 from '../assets/img/image3.png';

function Achievements(){
    const handleClick = () => {
        console.log("Button clicked!");
      };
    
      return (
        <>
          <div className="container-fluid py-5 flex justify-center items-center" style={{ backgroundColor: '#9A8350'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
              <div>
                <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>20</h1>
                <h1 className="text-white mb-6 " style={{ fontSize: '24px', fontWeight: '400'}}>All over world</h1>
              </div>
              <div>
                <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>12K+</h1>
                <h1 className="text-white mb-6 " style={{ fontSize: '24px', fontWeight: '400'}}>Product Sales</h1>
              </div>
              <div>
                <h1 className="text-white mb-2" style={{ fontSize: '64px', fontWeight: '400'}}>170+</h1>
                <h1 className="text-white mb-6" style={{ fontSize: '24px', fontWeight: '400'}}>Products Available</h1>
              </div>
            </div>
          </div>
    
          <div className="container-fluid py-5 mb-5">
            <div className="container py-5">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <div className="md:w-3/4 relative">
                    <img src={image3} alt='chain'style={{ width: '100%', paddingLeft: '20%'}}/>
                  </div>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0" style={{ paddingRight: '10%'}}>
                  <h1 className="mb-2  text-secondary text-center md:text-left" style={{ fontSize: '64px', lineHeight: '76px'}}>
                    Jewellery that as beautiful as you are
                  </h1>
                  <h5 className="mb-8 text-lg md:text-xl text-dark text-center md:text-left">
                    Discover our stunning selection of rings, brilliant diamonds,
                    and precious gemstones the eternal bond of love
                  </h5>
                  <div className="text-center md:text-left">
                    <CustomButton onClick={() => handleClick()}>
                      See All
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
)}
export default Achievements;