import styled from "styled-components";

const CreateAdsContainer = styled.div`
  .rs-uploader-file-item {
    height: 60px !important;
  }

  #photos,
  #banner {
    padding: 0.7rem 3rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .create-container {
    background-color: #f1f3f7;
    padding: 1rem 1rem;
    border-radius: 10px;
    //border: 3px solid var(--blue);
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    //color: var(--blue);

    input[type="text"],
    input[type="number"] {
      padding: 0.7rem !important;
      font-size: 0.9rem;
      font-weight: bold;
    }

    .new {
      background-color: red;
      color: var(--white);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.4rem 1rem;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      cursor: pointer;
    }

    .old {
      background-color: green;
      color: var(--white);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.4rem 1rem;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      cursor: pointer;
    }

    .create-ads-btn {
      background-color: var(--blue);
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
      padding: 0.7rem 3rem;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .rules-container {
    background-color: #f1f3f7;
    padding: 1rem 1rem;
    border-radius: 10px;
    border: 2px solid orange;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;

    .ReactCollapse--collapse {
      transition: height 500ms;
    }

    ul {
      margin-left: 1rem;
      li {
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 600;
      }
    }

    .collapse-btn {
      background-color: var(--white);
      color: var(--black);
      cursor: pointer;
      font-weight: 600;
      padding: 0.5rem;
      border: 1px solid #e5e5e5;
      border-radius: 50%;
    }
  }

  .ads-area {
    width: 100%;
    height: 600px;
    background-color: #f1f3f7;
    padding: 1rem 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
    position: relative;
    overflow: hidden;

    video.ads-video {
      position: absolute;
      z-index: 0;
      object-fit: cover;

      background-size: 100% 100%;
      top: -60%;
      left: -100%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }

  .rs-input-number-btn-group-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default CreateAdsContainer;
