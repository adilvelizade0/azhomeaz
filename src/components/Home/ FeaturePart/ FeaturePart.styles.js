import styled from "styled-components";

const FeaturePartContainer = styled.div`
  .slick-slider {
    &:hover {
      .slick-arrow {
        opacity: 1;
      }
    }
  }

  .slick-arrow {
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid var(--blue);
    z-index: 2;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    &:hover {
      background-color: var(--white);
    }
  }

  .slick-prev {
    left: -15px;
  }
  .slick-next {
    right: -15px;
  }
  .slick-dots li {
    width: 100px;
  }

  .slick-dots {
    height: 60px;
    bottom: -75px;

    li {
      height: 100%;

      img {
        border-radius: 5px;
      }
    }
  }

  .slick-img {
    width: 100%;
    border-radius: 10px;
    border: 4px solid var(--yellow);
    padding: 3px;
    height: 410px;
    object-fit: cover;
    position: relative;

    .img-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      z-index: 0;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;

      .title {
        font-size: 1.7rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 0;
      }

      .date {
        span {
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
        }
      }

      .price {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--yellow);
      }
    }

    .premium-badge {
      position: absolute;
      top: 4px;
      left: 4px;
      background-color: rgba(0, 0, 0, 0.6);
      color: var(--white);
      padding: 5px 10px;
      border-radius: 5px 0 5px 0;
      z-index: 1;

      img {
        width: 25px !important;
        height: 25px !important;
      }

      span {
        font-size: 1rem;
        font-weight: 600;
        color: var(--yellow);
      }
    }

    img {
      width: 100%;
      border-radius: 10px;
      height: 100% !important;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .slick-img {
      height: 300px;
    }
  }

  .slick-dots li.slick-active {
    border: 3px solid var(--blue);
    border-radius: 5px;

    img {
      border-radius: 5px;
    }
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    position: relative;
  }
`;

export default FeaturePartContainer;
