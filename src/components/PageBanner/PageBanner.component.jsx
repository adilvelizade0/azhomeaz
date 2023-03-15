import React from "react";
import PageBannerWrapper from "./PageBanner.styles.js";
import pagebanner from "../../assets/pagebanner.jpg";
import { Link } from "react-router-dom";

const PageBanner = ({ page }) => {
  return (
    <PageBannerWrapper>
      <div className="bg-image">
        <img className="img-fluid" src={pagebanner} alt="pagebanner" />
      </div>

      {page === "home" ? (
        <div className="nav h-100 d-flex pb-4 justify-content-center align-items-end align-items-lg-center">
          <Link to="/about">Haqqımızda</Link>
          <a href="#">Qaydalar</a>
          <a href="#">Təlimatlar</a>
          <Link to="/contact">Əlaqə</Link>
        </div>
      ) : (
        <div className="nav h-100 d-flex pb-4 justify-content-center  align-items-center">
          <Link to="/" className="fs-5">
            Əsas səhifə
          </Link>
          <span className="fw-bold text-light fs-5">/</span>
          <a className="fs-5">{page}</a>
        </div>
      )}
    </PageBannerWrapper>
  );
};

export default PageBanner;
