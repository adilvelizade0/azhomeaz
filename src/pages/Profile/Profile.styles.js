import styled from "styled-components";

const ProfileContainer = styled.div`
  .profile-container {
    background-color: var(--white);
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    margin-top: -7rem;
    position: relative;
    z-index: 1;
  }

  .profile-status {
    .status-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 3px solid var(--blue);
      color: var(--white);
      font-weight: 600;
    }
  }

  .settings {
    background-color: var(--white);
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    //padding: 1rem 0 0 0;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      list-style: none;

      .active {
        background-color: #f5f5f5;
        color: var(--blue);
      }

      li {
        border-bottom: 1px solid #e5e5e5;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 12px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }

  .setting-content {
    background-color: var(--white);
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 1rem;
  }
`;

export default ProfileContainer;
