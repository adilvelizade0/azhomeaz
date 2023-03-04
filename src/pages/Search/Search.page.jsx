import React, { useState } from "react";
import SearchContainer from "./Search.styles.js";
import { useLocation } from "react-router-dom";
import { FaTags, FaSearch } from "react-icons/fa";
import { InputNumber, InputPicker } from "rsuite";
import { Checkbox } from "rsuite";
import { Radio, RadioGroup, Form } from "rsuite";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.component.jsx";

const Search = () => {
  const { state } = useLocation();

  const sortFields = ["Bahadan ucuza", "Tarixə görə", "Ucuzdan bahaya"].map(
    (item) => ({
      label: item,
      value: item,
    })
  );

  const [filter, setFilter] = useState({
    category: "",
    maxPrice: "",
    minPrice: "",
    status: "",
    city: "",
    sort: "",
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    console.log(filter);
  };

  console.log(state);
  return (
    <SearchContainer>
      <PageBanner page="Axtarış" />
      <div className="container py-5">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-4 col-lg-3 mt-3 mt-lg-0">
            <div className="categories px-4">
              <h6>KATEQORİYALAR</h6>
              <hr />
              <ul>
                <li>
                  <FaTags size={20} className="me-2" />
                  <a href="#">Ustalar</a>
                </li>
                <li>
                  <FaTags size={20} className="me-2" />
                  <a href="#">Fasad Tikinti</a>
                </li>
                <li>
                  <FaTags size={20} className="me-2" />
                  <a href="#">Santeknik</a>
                </li>
                <li>
                  <FaTags size={20} className="me-2" />
                  <a href="#">Qapılar Və Pəncərələr</a>
                </li>
              </ul>
            </div>
            <div className="price-filter mt-3 px-3">
              <h6>QİYMƏT ARALĞI</h6>
              <hr className="mb-2" />
              <div className="price-range">
                <div className="row">
                  <div className="col-6 d-flex align-items-center col-md-12 col-xl-6">
                    <InputNumber
                      size={"lg"}
                      className="mt-3"
                      placeholder="Min qiymət"
                      style={{ width: "100%" }}
                      name="minPrice"
                      onChange={(value, event) => {
                        handleChange(event);
                      }}
                    />
                  </div>
                  <div className="col-6 d-flex align-items-center col-md-12 col-xl-6">
                    <InputNumber
                      size={"lg"}
                      className="mt-3"
                      placeholder="Max qiymət"
                      style={{ width: "100%" }}
                      name="maxPrice"
                      onChange={(value, event) => {
                        handleChange(event);
                      }}
                    />
                  </div>
                </div>
                <button className="mt-3 btn w-100 btn-primary d-flex justify-content-center align-items-center">
                  <FaSearch size={20} className="me-2" />
                  <span className="fw-bold">Axtar</span>
                </button>
              </div>
            </div>
            <div className="product-status mt-3 px-3">
              <h6>MƏHSULUN VƏZİYYƏTİ</h6>
              <hr />
              <div className="row">
                <div className="col-12">
                  <Checkbox
                    name="status"
                    onChange={(value, event) => {
                      // handleChange(event);
                    }}
                  >
                    <span className="new">Yeni</span>
                  </Checkbox>
                </div>
                <div className="col-12">
                  <Checkbox
                    name="status"
                    onChange={(value, event) => {
                      // handleChange(event);
                    }}
                  >
                    <span className="old">İkinci Əl</span>
                  </Checkbox>
                </div>
              </div>
              <button className="mt-3 btn w-100 btn-primary d-flex justify-content-center align-items-center">
                <FaSearch size={20} className="me-2" />
                <span className="fw-bold">Axtar</span>
              </button>
            </div>
            <div className="city-filter mt-3 px-3">
              <h6>ŞƏHƏRƏ GÖRƏ AXTARIŞ</h6>
              <hr />
              <Form.Group controlId="radioList">
                <RadioGroup
                  onChange={(value, event) => {
                    handleChange(event);
                  }}
                  name="city"
                >
                  <Radio value="Baku">Baki</Radio>
                  <Radio value="Sumgayit">Sumqayit</Radio>
                </RadioGroup>
              </Form.Group>
              <button className="mt-3 btn w-100 btn-primary d-flex justify-content-center align-items-center">
                <FaSearch size={20} className="me-2" />
                <span className="fw-bold">Axtar</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9 pe-4 pe-lg-0 ">
            <div className="sort mb-4">
              <div>
                <span className="fw-bold me-3">Sırala:</span>
                <InputPicker
                  data={sortFields}
                  style={{ width: 200 }}
                  placeholder="Sırala"
                  defaultValue="Tarixə görə"
                  name="sort"
                  onChange={(value, event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (item, index) => (
                  <div
                    className="col-6 col-lg-4 col-lg-5ths mb-3 pe-0"
                    key={index}
                  >
                    <ProductCard />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
