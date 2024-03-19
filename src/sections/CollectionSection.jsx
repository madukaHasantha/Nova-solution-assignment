import React, { useState, useEffect } from "react";
import mainTheme from "../themes/theme";
import { products } from "../data/Dataset";
import line3 from "../assets/img/Line 3.png";
import line4 from "../assets/img/Line 4.png";

function CollectionsSection() {
  const [productItems, setProductItem] = useState(products);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState("");
  const [selectedMetalItems, setSelectedMetalItems] = useState("");
  const [PriceRangeValue, setPriceRangeValue] = useState(0);
  const [filteredItemCount, setFilteredItemCount] = useState(products.length);

  useEffect(() => {
    setFilteredItemCount(productItems.length);
  }, [productItems]);

  const filteredItems = (category, metal, price) => {
    let newItem = [...products]; // copy of products

    // Filtering by karatage
    if (category !== "") {
      newItem = newItem.filter((item) => item.karatage === category);
    }

    // Filtering by metal
    if (metal !== "") {
      newItem = newItem.filter((item) => item.metal === metal);
    }

    // Filtering by price
    if (price !== 0) {
      newItem = newItem.filter((item) => item.price <= price);
    }

    setProductItem(newItem);
  };

  //handle the price range input
  const handlePriceRange = (event) => {
    const value = parseInt(event.target.value);
    setPriceRangeValue(value);
    filteredItems(selectedCategoryItems, selectedMetalItems, value);
  };

  // handle the checkbox change input for karatage
  const handleCheckboxInputChange = (category) => {
    setSelectedCategoryItems(category);
    filteredItems(category, selectedMetalItems, PriceRangeValue);
  };

  // handle the checkbox change input for metal
  const handleMetalCheckboxInputChange = (metal) => {
    setSelectedMetalItems(metal);
    filteredItems(selectedCategoryItems, metal, PriceRangeValue);
  };

  return (
    <>
      <div className="container px-10 mx-auto">
        <div className="container pb-5">
          <div className="flex items-center justify-between mt-[80px] mb-10">
            <h3 className="text-lg font-medium">Filters</h3>
            <div className="text-lg text-gray-600">
              Items ({filteredItemCount})
            </div>
          </div>
          <div className="-mt-[40px]">
            <img src={line3} alt="line3" />
          </div>
          <div className="-mt-[1px] ml-[400px] mb-4">
            <img src={line4} alt="line4" />
          </div>
          {/* filter section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
            <div className="md:col-span-1 lg:col-span-1">
              <div>
                {/* Karatage */}
                <h3>Karatage</h3>
                <ul className="mx-4 text-sm list-none">
                  <li className="mt-3">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="22k"
                        checked={selectedCategoryItems === "22k"}
                        onChange={() => handleCheckboxInputChange("22k")}
                      />
                      <h3 className="ml-1 text-gray-600">22k</h3>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="20k"
                        checked={selectedCategoryItems === "20k"}
                        onChange={() => handleCheckboxInputChange("20k")}
                      />
                      <h3 className="ml-1 text-gray-600">20k</h3>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="18k"
                        checked={selectedCategoryItems === "18k"}
                        onChange={() => handleCheckboxInputChange("18k")}
                      />
                      <h3 className="ml-1 text-gray-600">18k</h3>
                    </label>
                  </li>
                </ul>
              </div>
              {/* Metal */}
              <div>
                <h3 className="mt-4">Metal</h3>
                <ul className="mx-4 text-sm list-none">
                  <li className="mt-3">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="rose gold"
                        checked={selectedMetalItems === "rose gold"}
                        onChange={() =>
                          handleMetalCheckboxInputChange("rose gold")
                        }
                      />
                      <h3 className="ml-1 text-gray-600">Rose Gold</h3>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="white gold"
                        checked={selectedMetalItems === "white gold"}
                        onChange={() =>
                          handleMetalCheckboxInputChange("white gold")
                        }
                      />
                      <h3 className="ml-1 text-gray-600">White Gold</h3>
                    </label>
                  </li>
                  <li className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 form-checkbox"
                        value="yellow gold"
                        checked={selectedMetalItems === "yellow gold"}
                        onChange={() =>
                          handleMetalCheckboxInputChange("yellow gold")
                        }
                      />
                      <h3 className="ml-1 text-gray-600">Yellow Gold</h3>
                    </label>
                  </li>
                </ul>
              </div>
              {/* Price Range */}
              <div>
                <h3 className="mt-4">Price Range</h3>
                <input
                  type="range"
                  className="w-full mx-4 mt-2 form-range"
                  min="100"
                  max="1000"
                  value={PriceRangeValue}
                  onChange={handlePriceRange}
                />
                <output htmlFor="rangeInput" id="amount" className="mx-4">
                  <h3 className="text-sm text-gray-600">
                    RS 100 - RS {PriceRangeValue}
                  </h3>
                </output>
              </div>
            </div>

            {/* products */}
            <div className="md:col-span-3 lg:col-span-4">
              {productItems.length === 0 ? (
                <div className="text-center">
                  <h1 className="mb-4 text-4xl text-primary">
                    <span className="fas fa-box-archive text-primary"></span>
                    No Jewelry to display
                  </h1>
                  <h5>
                    Right now, we don’t have Jewelry for these filters, but
                  </h5>
                  <h5>we’ll fulfill your needs soon!</h5>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {productItems.map((val, index) => (
                    <div
                      className="col-span-1 md:w-full lg:w-full"
                      key={index}
                    >
                      <div className="overflow-hidden transition-transform duration-300 transform hover:scale-105 p-[10px] m-[10px] ml-10">
                        <img
                          src={val.product_img}
                          alt={val.description}
                          className="object-cover w-full h-60"
                        />
                        <div className="px-6 py-4">
                          <div className="flex items-center justify-center">
                            {val.product_name}s
                          </div>
                          <h5 className="flex items-center justify-center">
                            Rs: {val.price}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionsSection;
