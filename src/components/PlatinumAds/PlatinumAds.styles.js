import styled from "styled-components";

const PlatinumAdsContainer = styled.div`
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
    left: -5px;
  }
  .slick-next {
    right: -5px;
  }

  .card-price {
    font-size: 1.2rem !important;
  }
  .card-title {
    font-size: 1rem !important;
  }
  .card-info {
    font-size: 0.6rem !important;

    svg {
      width: 13px !important;
      height: 13px !important;
    }
  }

  .product-views {
    span {
      font-size: 0.9rem !important;
    }
  }

  .card-body {
    padding: 16px 0.5rem !important;
  }
`;

export default PlatinumAdsContainer;
