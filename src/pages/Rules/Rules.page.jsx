import React from "react";
import RulesContainer from "./Rules.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import Statistics from "../../components/Statistics/Statistics.component.jsx";

const Rules = () => {
  return (
    <RulesContainer>
      <PageBanner page="Qaydalar" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-11">
            <h1>Qaydalar</h1>
          </div>
        </div>
      </div>
      <Statistics />
    </RulesContainer>
  );
};

export default Rules;
