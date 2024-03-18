import React, { useState } from "react";
import mainTheme from "../themes/theme";
import { products } from "../data/Dataset";

function CollectionsSection() {
  const ItemCount = products.length;
  const [productItems, setProductItem] = useState(products);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState("");
  const [selectedMetalItems, setSelectedMetalItems] = useState("");
  const [PriceRangeValue, setPriceRangeValue] = useState(0);

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
      <div className="px-10 container-fluid fruite">
        <div className="container pb-5">
          <div className="row g-4">
            <div className="mt-0 col-lg-12 ">
              <div className="mt-4 row g-4">
                <div className="col-xl-6"></div>
                <div className="mt-4 row g-4">
                  <div className="col-xl-3 d-flex justify-content-start align-items-center">
                    <h3
                      style={{
                        fontFamily: mainTheme.fontWeight.medium,
                        fontSize: "24px",
                      }}
                    >
                      Filters
                    </h3>
                  </div>
                  <div className="col-xl-6"></div>
                  <div className="col-xl-3 d-none d-xl-flex justify-content-end align-items-center">
                    <h3
                      style={{
                        fontFamily: mainTheme.fontWeight.medium,
                        fontSize: "24px",
                      }}
                    >
                      {ItemCount} item(s)
                    </h3>
                  </div>
                </div>
              </div>

              <hr className="my-4 mt-2 mb-4" />

              {/* ---- Filtering by Karatage----- */}

              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h3>Karatage</h3>
                        <ul className="list-unstyled fruite-categories">
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between align-items-center fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="allCheckbox"
                              >
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  id="karatage_22k"
                                  value="22k"
                                  checked={selectedCategoryItems === "22k"}
                                  onChange={() =>
                                    handleCheckboxInputChange("22k")
                                  }
                                />
                                22k
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="braceletsCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="karatage_20k"
                                  value="20k"
                                  checked={selectedCategoryItems === "20k"}
                                  onChange={() =>
                                    handleCheckboxInputChange("20k")
                                  }
                                />
                                20k
                              </label>
                            </div>
                          </li>
                          <li key={products.id}>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="necklacesCheckbox"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="karatage_18k"
                                  value="18k"
                                  checked={selectedCategoryItems === "18k"}
                                  onChange={() =>
                                    handleCheckboxInputChange("18k")
                                  }
                                />
                                18k
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ---- Filtering by Metal----- */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h3>Metal</h3>
                        <ul className="list-unstyled fruite-categories">
                          <li>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="Metal_RoseGold"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="Metal_RoseGold"
                                  value="rose gold"
                                  checked={selectedMetalItems === "rose gold"}
                                  onChange={() =>
                                    handleMetalCheckboxInputChange("rose gold")
                                  }
                                />
                                Rose Gold
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="Metal_WhiteGold"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="Metal_WhiteGold"
                                  value="white gold"
                                  checked={selectedMetalItems === "white gold"}
                                  onChange={() =>
                                    handleMetalCheckboxInputChange("white gold")
                                  }
                                />
                                White Gold
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check d-flex justify-content-between fruite-name">
                              <label
                                className="form-check-label"
                                htmlFor="Metal_YellowGold"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="Metal_YellowGold"
                                  value="yellow gold"
                                  checked={selectedMetalItems === "yellow gold"}
                                  onChange={() =>
                                    handleMetalCheckboxInputChange(
                                      "yellow gold"
                                    )
                                  }
                                />
                                Yellow Gold
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ---- Filtering by price----- */}

                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-xl-12">
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min="100"
                            max="1000"
                            value={PriceRangeValue}
                            onChange={handlePriceRange}
                          />
                          <output id="amount " name="amount">
                            100 LKR - {PriceRangeValue} LKR
                          </output>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  {productItems.length === 0 ? (
                    <div className="container text-center">
                      <h1 className="mb-4 text-primary display-6">
                        <span className="fa-solid fa-box-archive text-primary"></span>
                        No Jewelery to display
                      </h1>
                      <h5>
                        Right now, we don’t have Jewelry for this filters, But
                      </h5>
                      <h5>we’ll full-fill your need soon!</h5>
                    </div>
                  ) : (
                    <div className="row g-2">
                      {productItems.map((val, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={val.product_img}
                                style={{ width: "500px", height: "300px" }} // Adjust width as needed
                                className="img-fluid rounded-top"
                                alt={val.description}
                              />
                            </div>

                            <div className="p-2 border-secondary border-top-4 rounded-bottom">
                              <h6>{val.product_name}</h6>

                              <div className="p-2 border-secondary border-top-4 rounded-bottom">
                                <h5 className="">Rs: {val.price}</h5>
                              </div>
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
        </div>
      </div>
    </>
  );
}

export default CollectionsSection;
