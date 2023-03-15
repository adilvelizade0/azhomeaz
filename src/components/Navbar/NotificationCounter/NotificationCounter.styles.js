import styled from "styled-components";

const NotificationCounterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--black);
  color: var(--white);
  border-radius: 50%;
  border: 2px solid var(--black);
  transition: all 0.3s;
  cursor: pointer;

  //&:hover {
  //  cursor: pointer;
  //  background-color: var(--black);
  //  color: var(--white);
  //  border: 2px solid var(--black);
  //}

  .counter {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    color: var(--white);
    background-color: #7a67c0;
    position: absolute;
    top: -8px;
    border: 2px solid var(--white);
    right: -8px;
  }
`;

export default NotificationCounterWrapper;
