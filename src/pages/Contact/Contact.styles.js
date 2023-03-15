import styled from "styled-components";

const ContactContainer = styled.div`
  .contact-form {
    label {
      font-size: 1rem;
      font-weight: 600;
      color: var(--blue);
    }

    button {
      width: 100% !important;
      padding: 12px 20px;
      background-color: var(--yellow);
      border: none;
      border-radius: 5px;
      color: var(--blue);
      font-size: 1rem;
      font-weight: bold;
      margin-top: 5px !important;

      &:active {
        background-color: var(--yellow);
        color: var(--blue);
      }
    }
  }
`;

export default ContactContainer;
