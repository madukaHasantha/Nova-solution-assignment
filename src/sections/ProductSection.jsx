import React, { useState, useEffect } from "react";
import { products } from "../data/Dataset";
import { Link } from "react-router-dom";
import mainTheme from "../themes/theme";

export default function Products() {
  const [displayedItems, setDisplayedItems] = useState(products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // add event listener for desktop view and handle mobile view
  useEffect(() => {
    checkMobileView();
    // Add event listener for desktop view
    window.addEventListener("resize", checkMobileView);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  
  // Function to determine if the screen is mobile view
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 767);
  };

   // Function to toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to filter items by category
  const filterItemsByCategory = (category) => {
    const filteredItems = products.filter((item) => item.category === category);
    setDisplayedItems(filteredItems);

    // Show all items if no category selected or "all" selected
    if (!category || category === "all") {
      setDisplayedItems(products);
      return;
    }
  };

  // Function to handle displaying all items
  const handleShowAllItems = () => {
    filterItemsByCategory();
  };

  return (
    <>
      <div className="py-0 container-fluid fruite">
        <div className="container py-2">
          <div className="text-center">
            {!isMobileView && (
              <>
                <div className="row g-4">
                  <div className="col-lg-4 text-start">
                    <h2 style={{ fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '24px'}}>Featured Products</h2>
                  </div>
                  <div className="col-lg-8 text-end">
                    <ul className="mb-6 text-center nav nav-pills d-inline-flex d-lg-inline-flex">
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light active"
                          onClick={handleShowAllItems}
                        >
                          <h5 style={{ fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '16px', width: '80px'}}>All</h5>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light "
                          onClick={() => filterItemsByCategory("New")}
                        >
                          <h5 style={{ width: "100px", fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '16px' }}>New</h5>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light "
                          onClick={() => filterItemsByCategory("Necklaces")}
                        >
                          <h5 style={{ width: "130px", fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '16px' }}>Necklaces</h5>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light"
                          onClick={() => filterItemsByCategory("Bracelets")}
                        >
                          <h5 style={{ width: "130px", fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '16px' }}>Bracelets</h5>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="py-2 m-2 bg-light"
                          onClick={() => filterItemsByCategory("Ear studs")}
                        >
                          <h5 style={{ width: "130px", fontFamily: mainTheme.typography.secondaryFont, fontWeight: mainTheme.fontWeight.semiBold, fontSize: '16px' }}>Ear Studs</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {isMobileView && (
              <>
                <button
                  className={`border  mb-4 ${isMenuOpen ? "collapsed" : ""}`}
                  type=""
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  {isMenuOpen ? (
                    <h4 className="mb-4" aria-hidden="false">
                      Choose Categories
                    </h4>
                  ) : (
                    <h4 className="">Choose Categories</h4>
                  )}
                </button>

                <div
                  className={`collapse navbar-collapse justify-content-center ${
                    isMenuOpen ? "show" : ""
                  } bg-white`}
                >
                  <div className="navbar-nav">
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={handleShowAllItems}
                    >
                      <h4 style={{ width: "130px" }}>All</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItemsByCategory("New")}
                    >
                      <h4 style={{ width: "130px" }}>New</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItemsByCategory("Necklaces")}
                    >
                      <h4 style={{ width: "130px" }}>Necklaces</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItemsByCategory("Bracelets")}
                    >
                      <h4 style={{ width: "130px" }}>Bracelets</h4>
                    </Link>
                    <Link
                      className="nav-item nav-link active me-3"
                      onClick={() => filterItemsByCategory("Ear studs")}
                    >
                      <h4 style={{ width: "130px" }}>Ear Studs</h4>
                    </Link>
                    <Link to="/cart" className="nav-item nav-link me-3">
                      <span className="d-none d-md-inline"></span>
                    </Link>
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="p-0 tab-pane fade show active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {displayedItems.map((item, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={item.product_img}
                                style={{ width: "500px", height: "300px" }}
                                className="img-fluid rounded-top"
                                alt={item.description}
                              />
                            </div>

                            <div className="p-2 border-secondary border-top-4 rounded-bottom">
                              <h6>{item.product_name}</h6>

                              <div className="p-2 border-secondary border-top-4 rounded-bottom">
                                <h5 className="">Rs: {item.price}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
