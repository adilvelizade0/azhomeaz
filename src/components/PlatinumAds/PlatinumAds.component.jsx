import React from "react";
import PlatinumAdsContainer from "./PlatinumAds.styles.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProductCard from "../ProductCard/ProductCard.component.jsx";

const PlatinumAds = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    navigation: true,
    pagination: true,
    slideCount: 8,
    currentSlide: 0,
    rows: 2,
    nextArrow: <FiArrowRight color="#034EFDFF" className="arrow-right" />,
    prevArrow: <FiArrowLeft color="#034EFDFF" className="arrow-left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <PlatinumAdsContainer>
      <h4 className="title mb-3 fw-bold">Platin Elanlar</h4>
      <Slider {...settings}>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
        <div className="p-1">
          <ProductCard />
        </div>
      </Slider>
    </PlatinumAdsContainer>
  );
};

export default PlatinumAds;
