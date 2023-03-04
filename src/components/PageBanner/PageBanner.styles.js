import styled from "styled-components";

const PageBannerWrapper = styled.section`
  overflow: hidden;
  height: 230px;
  position: relative;
  background: linear-gradient(rgba(4, 53, 138, 0.65), rgba(5, 44, 112, 0.8));

  .bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .nav {
    a {
      color: var(--white);
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
      margin: 0 0.7rem;
    }
  }
`;

export default PageBannerWrapper;
