import styled from "styled-components";

const ProductCardWrapper = styled.div`
  .card {
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    .card-head {
      position: relative;
      overflow: hidden;

      .new-badge {
        width: 50px;
        height: 30px;
        background-color: var(--yellow);
        border-radius: 5px;
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: bold;
      }

      .premium-badge {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 65px;
        height: 35px;
        background-color: var(--white);
        border-radius: 5px;
        border: 2px solid var(--blue);
        z-index: 1;
      }

      .favorite-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        color: var(--white);
        z-index: 1;
      }

      .card-img-overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px 10px 0 0;
        display: flex;
        justify-content: start;
        align-items: end;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        color: var(--white);
      }

      .card-img {
        object-fit: cover;
        border-radius: 10px 10px 0 0;
        transition: all 0.3s ease-in-out;
      }

      @media (max-width: 768px) {
        .card-img {
          height: 130px;
          width: 100%;
          object-fit: cover;
        }
      }
    }
    .card-body {
      .card-price {
        font-size: 1.3rem;
        font-weight: bold;
        color: #ff0000;
      }
      .card-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--black);
      }
      .card-info {
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--gray);
      }

      @media (max-width: 768px) {
        & {
          padding: 16px 0.5rem;
        }

        .card-price {
          font-size: 1.2rem;
        }
        .card-title {
          font-size: 1rem;
        }
        .card-info {
          font-size: 0.7rem;

          svg {
            width: 13px;
            height: 13px;
          }
        }
      }
    }

    &:hover {
      .card-img {
        border-radius: 10px 10px 0 0;
        transform: scale(1.2);
      }
    }
  }
`;

export default ProductCardWrapper;
