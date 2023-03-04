import React, { useState } from "react";
import SameAdsContainer from "./SameAds.styles.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "react-loader-spinner";
import ProductCard from "../ProductCard/ProductCard.component.jsx";

const SameAds = () => {
  const [items, setItems] = useState(Array.from({ length: 5 }));

  const fetchMoreData = () => {
    if (items.length >= 20) return;

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 5 })));
    }, 3000);
  };

  return (
    <SameAdsContainer>
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <h5 className="fw-bold">Bənzər Elanlar</h5>
          </div>
          <div className="col-12 mt-3">
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
      </div>
    </SameAdsContainer>
  );
};

export default SameAds;
