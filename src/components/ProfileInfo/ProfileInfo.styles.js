import styled from "styled-components";

const ProfileInfoContainer = styled.div`
  li {
    color: var(--black);
    font-size: 0.9rem;
  }

  form {
    label {
      font-size: 0.9rem;
      color: var(--black);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.6rem;
      border: 1px solid #e5e5e5;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--black);
    }
  }
`;

export default ProfileInfoContainer;
