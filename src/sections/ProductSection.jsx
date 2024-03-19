import React, { useState, useEffect } from "react";
import { products } from "../data/Dataset";
import { Link } from "react-router-dom";
import mainTheme from "../themes/theme";

export default function Products() {
  const [displayedItems, setDisplayedItems] = useState(products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    //
    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  // check is it mobile view
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 768);
  };
  //mobile view menu view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //filtering products by category 
  const filterItemsByCategory = (category) => {
    const filteredItems = products.filter((item) => item.category === category);
    setDisplayedItems(filteredItems);

    if (!category || category === "all") {
      setDisplayedItems(products);
      return;
    }
  };

  const handleShowAllItems = () => {
    filterItemsByCategory();
  };

  return (
    <>
      <div className="py-0 mx-auto container-fluid fruite">
        <div className="container">
          <div className="text-center">
            {/* desktop view menu*/}
            {!isMobileView && (
              <>
                <div className="flex justify-between ml-4">
                  <div className="text-start ml-14">
                    <h2 className="text-xl font-normal">Featured Products</h2>
                  </div>
                  <div className="text-end mr-14 ">
                    <ul className="flex mb-6 text-center mr-13">
                      <li>
                        <button
                          className="py-2 m-2 active"
                          onClick={handleShowAllItems}
                        >
                          <h5 className="text-base font-normal">All</h5>
                        </button>
                      </li>
                      <li>
                        <button
                          className="py-2 m-2"
                          onClick={() => filterItemsByCategory("New")}
                        >
                          <h5 className="text-base font-normal">New</h5>
                        </button>
                      </li>
                      <li>
                        <button
                          className="py-2 m-2 font-normal"
                          onClick={() => filterItemsByCategory("Necklaces")}
                        >
                          <h5 className="text-base font-normal">Necklaces</h5>
                        </button>
                      </li>
                      <li>
                        <button
                          className="py-2 m-2"
                          onClick={() => filterItemsByCategory("Bracelets")}
                        >
                          <h5 className="text-base font-normal">Bracelets</h5>
                        </button>
                      </li>
                      <li>
                        <button
                          className="py-2 m-2"
                          onClick={() => filterItemsByCategory("Ear studs")}
                        >
                          <h5 className="text-base font-normal">Ear Studs</h5>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {/* mobile view */}
            {isMobileView && (
              <>
                <button
                  className={`border mb-4 ${isMenuOpen ? "collapsed" : ""}`}
                  type=""
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <h4 className="mb-4" aria-hidden="false">
                    Choose Categories
                  </h4>
                </button>
                {/* mobile view menu*/}
                <div
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } bg-white text-center`}
                >
                  <Link
                    className="block mb-3"
                    onClick={handleShowAllItems}
                  >
                    <h4>All</h4>
                  </Link>
                  <Link
                    className="block py-2 mb-3"
                    onClick={() => filterItemsByCategory("New")}
                  >
                    <h4>New</h4>
                  </Link>
                  <Link
                    className="block py-2 mb-3"
                    onClick={() => filterItemsByCategory("Necklaces")}
                  >
                    <h4>Necklaces</h4>
                  </Link>
                  <Link
                    className="block py-2 mb-3"
                    onClick={() => filterItemsByCategory("Bracelets")}
                  >
                    <h4>Bracelets</h4>
                  </Link>
                  <Link
                    className="block py-2 mb-3"
                    onClick={() => filterItemsByCategory("Ear studs")}
                  >
                    <h4>Ear Studs</h4>
                  </Link>
                  <Link to="/cart" className="block py-2 mb-3">
                    <span className="d-none d-md-inline"></span>
                  </Link>
                </div>
              </>
            )}
            {/* products set */}
            <div>
              <div className="p-0 tab-pane show active">
                <div className="gap-2 ml-12 mr-12 row">
                  <div className="mx-auto lg:w-full md:w-full sm:w-full">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {displayedItems.map((item, index) => (
                        <div key={index}>
                          <div className="overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                            <img
                              src={item.product_img}
                              className="w-full h-48"
                              alt={item.description}
                            />

                            <div className="p-4 border-t border-gray-200">
                              <h6 className="font-semibold">{item.product_name}</h6>
                              <div className="mt-2">
                                <h5 className="font-semibold text-gray-800">Rs: {item.price}</h5>
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
