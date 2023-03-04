import React from "react";
import SidebarWrapper from "./Sidebar.styles.js";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { Avatar } from "rsuite";
import { FiUser } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggle}
      direction="left"
      style={{
        width: "300px",
        bottom: "env(safe-area-inset-bottom)",
        zIndex: 1500,
      }}
    >
      <SidebarWrapper className="h-100">
        <div className="container">
          <div className="row">
            <div className="col-12 px-3 nav py-3 d-flex justify-content-between">
              <img width={100} src={logo} alt="brand logo" />
              <RxCross2 size={30} className="cross" onClick={toggle} />
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <div className="avatar__container d-flex flex-column">
                <Avatar
                  circle
                  alt="@SevenOutman"
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "var(--yellow)",
                    border: "3px solid var(--blue)",
                  }}
                >
                  <FiUser size={90} />
                </Avatar>
                <button className="btn profile-btn mt-4 d-flex align-items-center">
                  <BiLogIn className="me-2" size={20} /> <span>Daxil Olun</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-3 d-flex align-items-center justify-content-center w-100"
          style={{
            backgroundColor: "var(--yellow)",
            position: "fixed",
            bottom: "env(safe-area-inset-bottom)",
          }}
        >
          <p className="m-0 fw-bold">Bütün hüquqlar qorunur.</p>
        </div>
      </SidebarWrapper>
    </Drawer>
  );
};

export default Sidebar;
