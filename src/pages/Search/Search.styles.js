import styled from "styled-components";

const SearchContainer = styled.div`
  button.btn {
    background-color: var(--blue);
    color: var(--white);
    border: none;
    border-radius: 5px;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--blue);
    }
  }
  .categories {
    background-color: #f1f3f7;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    border: 0.5px solid #e4e4e4;

    h6 {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--black);
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: var(--blue);

        a {
          color: var(--blue);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          text-decoration: none;

          &:hover {
            color: var(--blue);
          }
        }
      }
    }
  }
  .price-filter {
    background-color: #f1f3f7;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    border: 0.5px solid #e4e4e4;

    h6 {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--black);
    }

    .price-range {
      button.btn {
        background-color: var(--blue);
        color: var(--white);
        border: none;
        border-radius: 5px;
        padding: 0.7rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--blue);
        }
      }
    }
  }

  .product-status {
    background-color: #f1f3f7;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    border: 0.5px solid #e4e4e4;

    h6 {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--black);
    }

    span.new {
      background-color: green;
      color: var(--white);
      padding: 0.4rem 0.6rem;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 600;
    }

    span.old {
      background-color: red;
      color: var(--white);
      padding: 0.4rem 0.6rem;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .city-filter {
    background-color: #f1f3f7;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    border: 0.5px solid #e4e4e4;

    h6 {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--black);
    }
  }

  .col-xs-5ths,
  .col-sm-5ths,
  .col-md-5ths,
  .col-lg-5ths {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-xs-5ths {
    width: 20%;
    float: left;
  }

  @media (min-width: 768px) {
    .col-sm-5ths {
      width: 20%;
      float: left;
    }
  }

  @media (min-width: 992px) {
    .col-md-5ths {
      width: 20%;
      float: left;
    }
  }

  @media (min-width: 1200px) {
    .col-lg-5ths {
      width: 20%;
      float: left;
    }
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

export default SearchContainer;
