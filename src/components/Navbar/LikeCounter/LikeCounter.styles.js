import styled from "styled-components";

const LikeCounterWrapper = styled.div`
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--white);
  color: var(--black);
  border-radius: 50%;
  border: 2px solid var(--black);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--black);
    color: var(--white);
    border: 2px solid var(--black);
  }

  .counter {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    color: var(--white);
    background-color: var(--black);
    position: absolute;
    top: -10px;
    border: 2px solid var(--white);
    right: -12px;
  }
`;

export default LikeCounterWrapper;
