import styled from "styled-components";

const VipSectionWrapper = styled.section`
  .vip-btn {
    background-color: var(--yellow);
    color: var(--black);
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    border: 2px solid var(--white);
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: var(--blue);
    }
  }

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
    left: -10px;
  }
  .slick-next {
    right: -10px;
  }
`;

export default VipSectionWrapper;
