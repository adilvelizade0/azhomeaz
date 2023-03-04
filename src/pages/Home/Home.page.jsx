import React from "react";
import HomeContainer from "./Home.styles.js";
import CategorySliders from "../../components/Home/CategorySliders/CategorySliders.component.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import VipSection from "../../components/Home/VipSection/VipSection.component.jsx";
import FeaturePart from "../../components/Home/ FeaturePart/ FeaturePart.component.jsx";
import AnnouncementSection from "../../components/Home/AnnouncementSection/AnnouncementSection.component.jsx";

const Home = () => {
  return (
    <HomeContainer>
      <PageBanner page="home" />
      <div className="container py-3  py-lg-5">
        <div className="row justify-content-center">
          <div className="d-none d-lg-flex">
            <CategorySliders />
          </div>
          <div className="ps-lg-4 mb-5 mb-lg-0 pb-5 pb-sm-0 my-lg-5">
            <FeaturePart />
          </div>
          <div className="mt-lg-5 pt-5 pt-lg-0">
            <VipSection />
          </div>
          <div className="mt-lg-5 pt-lg-0">
            <AnnouncementSection />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
