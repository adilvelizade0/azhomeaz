import React from "react";
import InstructionsContainer from "./Instructions.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import Statistics from "../../components/Statistics/Statistics.component.jsx";

const Instructions = () => {
  return (
    <InstructionsContainer>
      <PageBanner page="Təlimatlar" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-11">
            <h1>Təlimatlar</h1>
          </div>
        </div>
      </div>
      <Statistics />
    </InstructionsContainer>
  );
};

export default Instructions;
