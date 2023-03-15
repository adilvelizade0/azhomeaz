import styled from "styled-components";

const ImageSlidersContainer = styled.div`
  position: relative;
  .thumbnail-slider-wrap {
    margin-top: 15px;
    height: 85px;
  }
  .thumbnail-slider-wrap .slick-track .slick-slide {
    text-align: center;
  }
  .thumbnail-slider-wrap .slick-track .slick-slide img {
    height: 70px;
    width: 85%;
    object-fit: cover;
    object-position: center;
    margin: 0 5px;
    border-radius: 5px;
  }

  .slick-slide-image {
    border-radius: 5px;
    cursor: pointer;
  }

  .main-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    object-position: center;
  }

  .promotion-badges {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;

    .promotion-badge {
      background-color: var(--white);
      margin: 0 5px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;

      img {
        width: 23px;
        height: 23px;
      }
    }
  }
`;

export default ImageSlidersContainer;
