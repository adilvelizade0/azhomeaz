import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  position: relative;

  .ReactCollapse--collapse {
    position: absolute;
    width: 100%;
    transition: height 500ms;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }

  .setting-icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }

  input.search-input {
    width: 100%;
    padding: 0.6rem 3rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    font-family: var(--main-font);
    font-weight: 500;

    &::placeholder {
      font-size: 1.1rem;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem var(--blue) !important;
      --webkit-box-shadow: 0 0 0 0.2rem var(--blue) !important;
      //border: none !important;
      outline: none;
    }
  }
`;

export const CollapseContainer = styled.div`
  background-color: var(--white);
  border-radius: 0 0 0.5rem 0.5rem;
  border-bottom: 2px solid var(--yellow);

  .search-btn {
    background-color: var(--yellow);
    color: var(--black);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--main-font);
    box-shadow: 0 0 0 0.15rem var(--blue) !important;

    &:active {
      background-color: var(--yellow);
      color: var(--black);
    }
  }
`;
