import React, { useState, useEffect } from "react";
import AnnouncementSectionContainer from "./AnnouncementSection.styles.js";
import { AiOutlineEye } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../../ProductCard/ProductCard.component.jsx";
import { Grid } from "react-loader-spinner";

const AnnouncementSection = () => {
  const [items, setItems] = useState(Array.from({ length: 5 }));

  const fetchMoreData = () => {
    if (items.length >= 20) return;

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 5 })));
    }, 3000);
  };

  return (
    <AnnouncementSectionContainer>
      <div className="pt-4 pt-sm-0">
        <div className="d-flex justify-content-between align-items-end">
          <h6 className="fw-bold fs-5 ms-lg-3">Ən Son Elanlar</h6>
          <button className="btn announcement-btn me-lg-2">
            <AiOutlineEye className="me-2" size={20} />
            <span>Bütün Elanlar</span>
          </button>
        </div>
        <div className="row mt-4 justify-content-center">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              items.length < 20 ? (
                <div className="d-flex justify-content-center mt-3">
                  <Grid
                    height="40"
                    width="40"
                    color="#034efd"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    visible={true}
                  />
                </div>
              ) : null
            }
            className="row"
          >
            {items.map((item, index) => (
              <div
                className="col-6 px-1 col-md-4 col-lg-5ths mb-4 d-flex justify-content-center"
                key={index}
              >
                <ProductCard id={index} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </AnnouncementSectionContainer>
  );
};

export default AnnouncementSection;
