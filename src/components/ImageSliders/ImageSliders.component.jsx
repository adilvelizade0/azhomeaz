import React, { useState, useEffect } from "react";
import ImageSlidersContainer from "./ImageSliders.styles.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import crown from "../../assets/product/crown.png";
import diamond from "../../assets/product/diamond.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const ImageSliders = ({
  images = [
    {
      id: 1,
      image: "https://picsum.photos/800/400?img=1",
    },
    {
      id: 2,
      image: "https://picsum.photos/800/400?img=2",
    },
  ],
  isHighlighted = false,
  isVip = false,
  isPlatin = false,
}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: "10px",
  };

  return (
    <ImageSlidersContainer>
      <div className="slider-wrapper">
        <div className="promotion-badges d-flex">
          <Tooltip
            place="bottom"
            anchorSelect="#vip-anchor-element"
            content="VIP Elan"
          />
          <Tooltip
            place="bottom"
            anchorSelect="#platinum-anchor-element"
            content="Platin Elan"
          />
          {isVip && (
            <div className="promotion-badge">
              <img id="vip-anchor-element" src={crown} alt="crown" width={20} />
            </div>
          )}
          {isPlatin && (
            <div className="promotion-badge">
              <img
                id="platinum-anchor-element"
                src={diamond}
                alt="crown"
                width={20}
              />
            </div>
          )}
        </div>
        <PhotoProvider>
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {images.map(({ id, image }) => (
              <div className="slick-slide" key={id}>
                <PhotoView src={image}>
                  <img className="slick-slide-image main-image" src={image} />
                </PhotoView>
              </div>
            ))}
          </Slider>
        </PhotoProvider>

        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {images.map(({ id, image }) => (
              <div className="slick-slide" key={id}>
                <img className="slick-slide-image" src={image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ImageSlidersContainer>
  );
};

export default ImageSliders;
