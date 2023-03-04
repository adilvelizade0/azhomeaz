import styled from "styled-components";

const AnnouncementSectionContainer = styled.div`
  .announcement-btn {
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
`;

export default AnnouncementSectionContainer;
