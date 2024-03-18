import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer>
      <div className="p-2 text-white lg:p-20" style={{ backgroundColor: '#1F1F1F'}}>
        <div className="container">
          <div className="container py-5">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Left side column */}
              <div className="w-full mb-5 sm:w-1/2 lg:w-1/4">
                <a href="#">
                  <div className="flex items-center">
                    {/* Left side column image */}
                    <div>
                      <img
                        src={logo}
                        alt="Logo"
                        className="logo-image me-4 lg:me-12"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    {/* Right side column header and paragpraph */}
                    <div className="flex flex-col justify-center ms-2 lg:ms-4">
                      <h3 className="text-xl text-white lg:text-4xl">Treasure</h3>
                      <p className="mb-2 foot-item" style={{ color: '#939393', fontSize: '12px' }}>
                        Every sparkle a stolen glance
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Right side column */}
              <div className="w-full sm:w-1/2 lg:w-5/6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-40">
                  {/* Column one Navigater */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="mb-4 text-light lg:mb-10"  style={{fontSize:'25px'}}>Navigate</h3>
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
                  {/* Column 02 */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="mb-4 text-light lg:mb-10" style={{whiteSpace:'nowrap', fontSize:'25px' }} >Need Help?</h3>
                      <a href="/" className="mb-2 foot-item"  style={{whiteSpace:'nowrap'}}>
                        Customer Service
                      </a>
                      <a href="/" className="mb-2 foot-item"  style={{whiteSpace:'nowrap'}}>
                        Store Locator
                      </a>
                    </div>
                  </div>
                  {/* Column 03 */}
                  <div className="mb-4">
                    <div className="flex flex-col footer-item">
                      <h3 className="mb-4 text-light lg:mb-10" style={{fontSize:'25px'}}>Social</h3>
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