import React from "react";
import LoaderWrapper from "./Loader.styles.js";

const Loader = () => {
  return (
    <LoaderWrapper>
      <span className="loader"></span>
    </LoaderWrapper>
  );
};

export default React.memo(Loader);
