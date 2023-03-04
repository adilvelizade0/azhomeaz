import styled from "styled-components";

const CategoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-bottom: 3px solid var(--blue);
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 130px;
  cursor: pointer;

  h6 {
    color: var(--black);
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 0.7rem;
    font-family: var(--main-font);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;

export default CategoryWrapper;
