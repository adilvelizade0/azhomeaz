import styled from "styled-components";

const SidebarWrapper = styled.aside`
  position: relative;
  .nav {
    background-color: var(--yellow);
  }
  .profile-btn {
    background-color: var(--black);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    font-weight: bold;
    font-size: 1rem;
    border: 2px solid var(--black);

    &:hover {
      background-color: var(--white);
      color: var(--black);
      border: 2px solid var(--black);
    }
  }
  .cross {
    background-color: var(--white);
    color: var(--black);
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
  }
`;

export default SidebarWrapper;
