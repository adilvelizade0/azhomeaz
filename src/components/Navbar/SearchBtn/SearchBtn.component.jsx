import React from "react";
import { SearchBtnWrapper } from "./SearchBtn.styles.js";
import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <SearchBtnWrapper>
      <div className="d-none d-sm-flex align-items-center">
        <FaSearch size={20} />
      </div>
      <div className="d-flex d-sm-none align-items-center">
        <FaSearch size={23} />
      </div>
    </SearchBtnWrapper>
  );
};

export default SearchBtn;
