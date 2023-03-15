import React from "react";
import AboutWrapper from "./About.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";

const About = () => {
  return (
    <AboutWrapper>
      <PageBanner page="Haqqımızda" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-11">
            <h1>Haqqımızda</h1>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
