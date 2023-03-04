import React from "react";
import SidebarBtnWrapper from "./SidebarBtn.styles.js";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarBtn = ({ toggle }) => {
  return (
    <SidebarBtnWrapper onClick={toggle}>
      <div className="d-none align-items-center d-sm-flex">
        <GiHamburgerMenu size={20} />
      </div>
      <div className="d-flex align-items-center d-sm-none">
        <GiHamburgerMenu size={23} />
      </div>
    </SidebarBtnWrapper>
  );
};

export default SidebarBtn;
