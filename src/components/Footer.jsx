import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer>
      <div className="bg-yellow-600 p-10 lg:p-20 flex items-center justify-center" style={{ backgroundColor: '#9A8350' }}>
        <div className="container" style={{ lineHeight: '35px', transition: '0.5s' }}>
          <div className="row">
            <div className="col text-center">
              <h1 className="text-white" style={{ fontSize: '24px', fontWeight: '400' }}>
                Follow Us @TreasureOfficial on Instagram
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-10 lg:p-20 text-white">
        <div className="container">
          <div className="container py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Left-sided column */}
              <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
                <a href="#">
                  <div className="flex items-center">
                    {/* Left-sided column for the image */}
                    <div>
                      <img
                        src={logo}
                        alt="Logo"
                        className="logo-image me-4 lg:me-12"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    {/* Right-sided column for heading and paragraph */}
                    <div className="ms-2 lg:ms-4 flex flex-col justify-center">
                      <h3 className="text-white text-xl lg:text-4xl">Treasure</h3>
                      <p className="mb-2 foot-item" style={{ color: '#939393', fontSize: '12px' }}>
                        Every sparkle a stolen glance
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Right-sided columns */}
              <div className="w-full sm:w-1/2 lg:w-5/6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-40">
                  {/* Column 1 (Navigate) */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="text-light mb-4 lg:mb-10"  style={{fontSize:'25px'}}>Navigate</h3>
                      <a href="/" className="mb-2 foot-item">
                        Home
                      </a>
                      <a href="/" className="mb-2 foot-item">
                        Bridal
                      </a>
                      <a href="/" className="mb-2 foot-item">
                        Exclusive
                      </a>
                      <a href="/" className="mb-2 foot-item">
                        Collection
                      </a>
                      <a href="/" className="mb-2 foot-item">
                        Cart
                      </a>
                    </div>
                  </div>
                  {/* Column 2 (Need Help?) */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="text-light mb-4 lg:mb-10" style={{whiteSpace:'nowrap', fontSize:'25px' }} >Need Help?</h3>
                      <a href="/" className="mb-2 foot-item"  style={{whiteSpace:'nowrap'}}>
                        Customer Service
                      </a>
                      <a href="/" className="mb-2 foot-item"  style={{whiteSpace:'nowrap'}}>
                        Store Locator
                      </a>
                    </div>
                  </div>
                  {/* Column 3 (Social) */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="text-light mb-4 lg:mb-10" style={{fontSize:'25px'}}>Social</h3>
                      <a href="/" className="mb-2 foot-item">
                        Instagram
                      </a>
                      <a href="/" className="mb-2 foot-item">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;