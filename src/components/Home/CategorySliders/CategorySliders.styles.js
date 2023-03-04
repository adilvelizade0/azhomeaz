import styled from "styled-components";

const CategorySlidersWrapper = styled.section`
  margin-top: -115px;
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

export default CategorySlidersWrapper;
