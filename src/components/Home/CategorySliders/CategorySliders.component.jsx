import React from "react";
import CategorySlidersWrapper from "./CategorySliders.styles.js";
import Category from "../../Category/Category.component.jsx";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CategorySliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    navigation: true,
    pagination: true,
    nextArrow: <FiArrowRight color="#034EFDFF" className="arrow-right" />,
    prevArrow: <FiArrowLeft color="#034EFDFF" className="arrow-left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CategorySlidersWrapper>
      <div className="container">
        <Slider {...settings}>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
          <div className="p-1">
            <Category />
          </div>
        </Slider>
      </div>
    </CategorySlidersWrapper>
  );
};

export default React.memo(CategorySliders);
