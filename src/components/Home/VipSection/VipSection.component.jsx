import React from "react";
import VipSectionWrapper from "./VipSection.styles.js";
import { AiOutlineEye } from "react-icons/ai";
import ProductCard from "../../ProductCard/ProductCard.component.jsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VipSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    navigation: true,
    pagination: true,
    nextArrow: <FiArrowRight color="#034EFDFF" className="arrow-right" />,
    prevArrow: <FiArrowLeft color="#034EFDFF" className="arrow-left" />,
    rows: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <VipSectionWrapper>
      <div className="container-flui1 pt-4 pt-sm-0">
        <div className="d-flex justify-content-between align-items-end">
          <h6 className="fw-bold fs-5 ms-lg-3">VIP Elanlar</h6>
          <button className="btn vip-btn me-lg-2">
            <AiOutlineEye className="me-2" size={20} />
            <span>Bütün Vip Elanlar</span>
          </button>
        </div>

        <Slider {...settings} className="mt-3">
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
          <div className="p-1 p-md-3">
            <ProductCard />
          </div>
        </Slider>
      </div>
    </VipSectionWrapper>
  );
};

export default VipSection;
