import styled from "styled-components";

const AdsDetailsContainer = styled.div`
  .info {
    .services {
      background-color: #f1f3f7;
      padding: 1rem 0.5rem;
      border-radius: 10px;
      //border: 3px solid var(--blue);
      box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;

      button {
        border: 2.5px solid var(--blue);
        background-color: #f1f3f7;
        border-radius: 8px;
        padding: 0.6rem 1rem;
        width: 120px;
        font-size: 1rem;
        font-weight: 800;
        font-family: var(--secondary-font);
      }

      button.platinum {
        border-color: orange;
        color: orange;
      }

      button.vip {
        border-color: purple;
        color: purple;
      }

      button.premium {
        border-color: green;
        color: green;
      }
    }

    .favorite-container {
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--blue);
      }
    }

    .info-details {
      ul {
        li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }

    .warning {
      font-size: 1rem;
      background-color: #f1f3f7;
      padding: 1rem 0.5rem;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    }
  }

  .user-info {
    .user-image {
      border: 2.5px solid var(--blue);
      border-radius: 50%;
      padding: 0.2rem;
    }
    span {
      color: var(--blue);
      cursor: pointer;
    }
  }

  .ads-details {
    span {
      cursor: pointer;
    }
  }
`;

export default AdsDetailsContainer;
