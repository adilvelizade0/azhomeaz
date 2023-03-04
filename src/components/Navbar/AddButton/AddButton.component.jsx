import React from "react";
import AddButtonWrapper from "./AddButton.styles.js";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

const AddButton = () => {
  return (
    <Link className="text-decoration-none" to="/create">
      <AddButtonWrapper className="btn d-flex justify-content-center align-items-center">
        <BsPlusLg className="me-2" size={17} />
        <span className="fw-bold">Elan əlavə et</span>
      </AddButtonWrapper>
    </Link>
  );
};

export default AddButton;
