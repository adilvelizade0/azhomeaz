import styled from "styled-components";

const SameAdsContainer = styled.div`
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

export default SameAdsContainer;
