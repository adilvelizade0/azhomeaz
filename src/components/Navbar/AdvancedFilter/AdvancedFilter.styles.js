import styled from "styled-components";

const AdvancedFilterContainer = styled.div`
  position: relative;
  background-color: var(--white);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 95vw;
  margin-top: 20px;
  border-radius: 10px;

  .category {
    border: 3px solid var(--blue);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #ffe600;
    p.category-name {
      margin-bottom: 0;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--black);
    }
  }
`;

export default AdvancedFilterContainer;
