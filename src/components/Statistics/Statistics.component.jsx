import React from "react";
import StatisticsContainer from "./Statistics.styles.js";
import ads from "../../assets/statistics/ads.png";
import user from "../../assets/statistics/user.png";
import store from "../../assets/statistics/store.png";

const Statistics = () => {
  return (
    <StatisticsContainer>
      <div className="container py-4">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-12 col-md-4 col-3 d-flex justify-content-center align-items-center">
            <img width={70} src={user} alt="user" />
            <div className="ms-3">
              <h2 className="fw-bold">301+</h2>
              <p className="fw-bold">İstifadəçi Sayı</p>
            </div>
          </div>
          <div className="col-12 my-4 my-md-0 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
            <img width={70} src={ads} alt="ads" />
            <div className="ms-3">
              <h2 className="fw-bold">506+</h2>
              <p className="fw-bold">Elan Sayı</p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-3 d-flex justify-content-center align-items-center">
            <img width={70} src={store} alt="store" />
            <div className="ms-3">
              <h2 className="fw-bold">5+</h2>
              <p className="fw-bold">Mağazalar</p>
            </div>
          </div>
        </div>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
