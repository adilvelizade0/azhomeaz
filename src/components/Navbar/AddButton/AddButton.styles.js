import styled from "styled-components";

const AddButtonWrapper = styled.button`
  padding: 0.5rem 1.2rem;
  border: 2px solid var(--black);
  border-radius: 0.5rem;
  background-color: var(--yellow);
  color: var(--black);
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--black);
    color: var(--white);
    border-color: var(--black);
  }

  &:active {
    background-color: var(--black) !important;
    color: var(--white) !important;
    border-color: var(--black) !important;
  }

  &:focus {
    background-color: var(--black);
    color: var(--white);
    border-color: var(--black);
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export default AddButtonWrapper;
