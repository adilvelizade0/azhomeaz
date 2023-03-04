import React from "react";
import NavbarContainer from "./Navbar.styles.js";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar.component.jsx";
import { Link } from "react-router-dom";
import LikeCounter from "./LikeCounter/LikeCounter.component.jsx";
import NotificationCounter from "./NotificationCounter/NotificationCounter.component.jsx";
import AddButton from "./AddButton/AddButton.component.jsx";
import SidebarBtn from "./SidebarBtn/SidebarBtn.component.jsx";
import SearchBtn from "./SearchBtn/SearchBtn.component.jsx";
import Popup from "reactjs-popup";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter.component.jsx";
const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer className="sticky-top shadow-sm">
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-2 col-lg-1">
            <SidebarBtn toggle={toggle} />
          </div>
          <div className="col-8 col-lg-2 d-flex justify-content-center justify-content-lg-start">
            <div className="logo-container">
              <Link to="/">
                <img width={110} src={logo} alt="Brand Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <SearchBar />
          </div>
          <div className="col-2 col-lg-4 d-flex  justify-content-around d-none d-lg-flex">
            <div className="d-flex me-4">
              <LikeCounter />
              <NotificationCounter />
            </div>

            <AddButton />
          </div>
          <div className="col-2 d-flex justify-content-end d-lg-none">
            <Popup
              closeOnDocumentClick={false}
              trigger={
                <div>
                  <SearchBtn />
                </div>
              }
              arrow={false}
              position="bottom right"
            >
              <AdvancedFilter />
            </Popup>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
