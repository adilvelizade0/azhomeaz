import React, { useState } from "react";
import AdvancedFilterContainer from "./AdvancedFilter.styles.js";
import SearchBar from "../../SearchBar/SearchBar.component.jsx";
import engineer from "../../../assets/categories/engineer.png";
import shower from "../../../assets/categories/shower.png";
import door from "../../../assets/categories/door.png";
import light from "../../../assets/categories/light-bulb.png";
import wood from "../../../assets/categories/wood.png";
import artist from "../../../assets/categories/artist.png";

const AdvancedFilter = ({ toggle }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <AdvancedFilterContainer>
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <SearchBar toggle={toggle} selectedCategory={selectedCategory} />
          </div>
          <div className="col-12 py-3 px-3">
            <div className="row">
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("engineer")}
                  style={{
                    border:
                      selectedCategory === "engineer"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "engineer"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={engineer}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "engineer"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    İş geyimləri
                  </p>
                </div>
              </div>
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("shower")}
                  style={{
                    border:
                      selectedCategory === "shower"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "shower"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={shower}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "shower"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    Santexnik
                  </p>
                </div>
              </div>
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("door")}
                  style={{
                    border:
                      selectedCategory === "door"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "door"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={door}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "door"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    Qapılar...
                  </p>
                </div>
              </div>
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("light")}
                  style={{
                    border:
                      selectedCategory === "light"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "light"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 mb-3 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={light}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "light"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    Elektrik
                  </p>
                </div>
              </div>
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("wood")}
                  style={{
                    border:
                      selectedCategory === "wood"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "wood"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 mb-3 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={wood}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "wood"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    Taxtalar
                  </p>
                </div>
              </div>
              <div className="col-4 mb-3">
                <div
                  onClick={() => setSelectedCategory("artist")}
                  style={{
                    border:
                      selectedCategory === "artist"
                        ? "3px solid var(--blue)"
                        : "3px solid var(--white)",
                    boxShadow:
                      selectedCategory === "artist"
                        ? "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                        : "none",
                  }}
                  className="category py-2 mb-3 d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    src={artist}
                    alt="category"
                    width={50}
                    height={50}
                    className="category-icon"
                  />
                  <p
                    style={{
                      color:
                        selectedCategory === "artist"
                          ? "var(--blue)"
                          : "var(--black)",
                    }}
                    className="category-name pt-2"
                  >
                    Boyalar...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdvancedFilterContainer>
  );
};

export default AdvancedFilter;
