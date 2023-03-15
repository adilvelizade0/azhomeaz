import styled from "styled-components";

const SidebarWrapper = styled.aside`
  position: relative;
  .nav {
    //background-color: var(--yellow);
  }
  .profile-btn {
    background-color: var(--blue);
    color: var(--white);
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    font-weight: bold;
    font-size: 0.9rem;
    border: 2px solid var(--blue);

    &:hover {
      background-color: var(--white);
      color: var(--blue);
      border: 2px solid var(--blue);
    }
  }
  .cross {
    background-color: var(--white);
    color: var(--black);
    width: 45px;
    height: 45px;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
  }

  .menu {
    border-top: 3px solid var(--blue);
    padding: 0;
    li {
      padding: 0.7rem 1rem;
      list-style: none;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
      transition: all 0.3s;
      font-weight: 600;
      &:hover {
        background-color: #ddd;
        color: var(--blue);
      }
    }
  }
`;

export default SidebarWrapper;
