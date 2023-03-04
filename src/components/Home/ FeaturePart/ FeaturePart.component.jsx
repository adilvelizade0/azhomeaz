import React from "react";
import FeaturePartContainer from "./ FeaturePart.styles.js";
import video from "../../../assets/videos/video.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import platinum from "../../../assets/product/diamond.png";
import { FaClock } from "react-icons/fa";

const FeaturePart = () => {
  const settings = {
    infinite: true,
    customPaging: function (i) {
      return (
        <a>
          <img
            src="https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg"
            alt={"img" + i}
            className="img-fluid "
          />
        </a>
      );
    },

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    navigation: true,
    pagination: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    nextArrow: <FiArrowRight color="#034EFDFF" className="arrow-right" />,
    prevArrow: <FiArrowLeft color="#034EFDFF" className="arrow-left" />,
  };
  return (
    <FeaturePartContainer>
      <div>
        <div className="row justify-content-center">
          <div className="d-none d-sm-flex col-12 mb-3 col-lg-5">
            <video
              height="100%"
              className="ads"
              width="100%"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" col-lg-7 col-xl-6 px-3 position-relative">
            <Slider {...settings}>
              <div className="slick-img">
                <div className="premium-badge d-flex align-items-center px-3 py-2">
                  <img src={platinum} alt="platinum" />
                  <span className="ms-2">Platin Pəncərə</span>
                </div>
                <div className="img-overlay"></div>
                <img
                  src="https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg"
                  alt="img"
                />
                <div className="info ps-4 pb-4">
                  <h3 className="text-white title">Kərpiç</h3>
                  <div>
                    <div className="price">10 AZN</div>
                  </div>
                  <div className="date d-flex align-items-center">
                    <FaClock className="me-2 text-white" size={20} />
                    <span className="text-white">12.12.2021</span>
                  </div>
                </div>
              </div>
              <div className="slick-img">
                <div className="premium-badge d-flex align-items-center px-3 py-2">
                  <img src={platinum} alt="platinum" />
                  <span className="ms-2">Platin Pəncərə</span>
                </div>
                <div className="img-overlay"></div>
                <img
                  src="https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg"
                  alt="img"
                />
                <div className="info ps-4 pb-4">
                  <h3 className="text-white title">Kərpiç</h3>
                  <div>
                    <div className="price">10 AZN</div>
                  </div>
                  <div className="date d-flex align-items-center">
                    <FaClock className="me-2 text-white" size={20} />
                    <span className="text-white">12.12.2021</span>
                  </div>
                </div>
              </div>
              <div className="slick-img">
                <div className="premium-badge d-flex align-items-center px-3 py-2">
                  <img src={platinum} alt="platinum" />
                  <span className="ms-2">Platin Pəncərə</span>
                </div>
                <div className="img-overlay"></div>
                <img
                  src="https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg"
                  alt="img"
                />
                <div className="info ps-4 pb-4">
                  <h3 className="text-white title">Kərpiç</h3>
                  <div>
                    <div className="price">10 AZN</div>
                  </div>
                  <div className="date d-flex align-items-center">
                    <FaClock className="me-2 text-white" size={20} />
                    <span className="text-white">12.12.2021</span>
                  </div>
                </div>
              </div>
              <div className="slick-img">
                <div className="premium-badge d-flex align-items-center px-3 py-2">
                  <img src={platinum} alt="platinum" />
                  <span className="ms-2">Platin Pəncərə</span>
                </div>
                <div className="img-overlay"></div>
                <img
                  src="https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg"
                  alt="img"
                />
                <div className="info ps-4 pb-4">
                  <h3 className="text-white title">Kərpiç</h3>
                  <div>
                    <div className="price">10 AZN</div>
                  </div>
                  <div className="date d-flex align-items-center">
                    <FaClock className="me-2 text-white" size={20} />
                    <span className="text-white">12.12.2021</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </FeaturePartContainer>
  );
};

export default FeaturePart;
