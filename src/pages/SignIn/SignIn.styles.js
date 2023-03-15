import styled from "styled-components";

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .link-tabs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
      border-bottom: 1px solid #f5f5f5;

      li {
        list-style: none;
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);

        &:hover {
          background-color: #f5f5f5;
        }

        a {
          color: var(--blue);
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .active {
        background-color: #f5f5f5;
        color: var(--blue) !important;
        border-bottom: 2.5px solid var(--blue);

        a {
          color: var(--blue) !important;
        }
      }
    }
  }

  .row {
    height: 100% !important;
  }

  a {
    color: var(--blue) !important;
  }

  .back-btn {
    background-color: var(--white);
    border: 2px solid var(--blue);
    border-radius: 50%;
    //padding: 5px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--blue);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--blue);
      color: var(--white);
    }
  }

  .signin-banner {
    background-color: var(--yellow);
    //border-radius: 0 0 0 50%;
    height: 100%;
    width: 100%;
    position: relative;

    .back-btn {
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }

  .submit {
    width: 100% !important;
    padding: 12px 20px;
    background-color: var(--yellow);
    border: none;
    border-radius: 5px;
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
    margin-top: 5px !important;
  }

  .signin-form {
    height: 100%;
    p {
      font-size: 1rem;
      font-weight: 600;
    }
    form {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      button {
        width: 100% !important;
        padding: 12px 20px;
        background-color: var(--yellow);
        border: none;
        border-radius: 5px;
        color: var(--black);
        font-size: 1rem;
        font-weight: 600;
        margin-top: 5px !important;
      }

      .rs-form-group {
        margin-bottom: 15px !important;
      }

      label {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 8px;
      }

      .rs-form-help-text {
        color: orange;
        font-weight: 500;
      }

      input {
        display: block !important;
        padding: 12px 20px;
        //width: 400px;
        width: 100% !important;
      }

      .form-group {
        width: 100%;
      }
    }
  }
`;

export default SignInContainer;
