import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh;
  //width: 100vw;
  width: 100%;
  height: 100%;
  //background: #263238;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  .loader {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    //background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
    background: linear-gradient(121.86deg, #0049fc 23.04%, #00cbfe 97.21%);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 54px;
    height: 54px;
    border-radius: 50%;
    //background: #263238;
    //background-color: #120e5c;
    background-color: #fff;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderWrapper;
