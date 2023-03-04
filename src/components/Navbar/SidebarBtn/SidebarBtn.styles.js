import styled from "styled-components";

const SidebarBtnWrapper = styled.button`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--white);
  color: var(--black);
  border-radius: 50%;
  border: 2px solid var(--white);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--black);
    color: var(--white);
    border: 2px solid var(--black);
  }
`;

export default SidebarBtnWrapper;
