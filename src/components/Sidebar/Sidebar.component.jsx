import React, { useEffect, useState } from "react";
import SidebarWrapper from "./Sidebar.styles.js";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { Avatar } from "rsuite";
import { FiUser } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { connect } from "react-redux";

const Sidebar = ({ toggle, isOpen, user }) => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  const checkSession = () => {
    if (localStorage.getItem("session")) {
      setSession(JSON.parse(localStorage.getItem("session")));
    } else {
      setSession(null);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Drawer
      open={isOpen}
      onClose={toggle}
      direction="left"
      style={{
        width: "310px",
        bottom: "env(safe-area-inset-bottom)",
        zIndex: 5500,
      }}
    >
      <SidebarWrapper className="h-100">
        <div className="container">
          <div className="row">
            <div className="col-12 px-2 nav pt-3 d-flex justify-content-between">
              <img width={100} src={logo} alt="brand logo" />
              <RxCross2 size={40} className="cross" onClick={toggle} />
            </div>
            <div className="col-12 d-flex flex-column align-items-center justify-content-center my-4">
              {session ? (
                <div className="avatar__container  d-flex flex-column ">
                  <div className="d-flex flex-column align-items-center">
                    <Avatar
                      circle
                      alt="@SevenOutman"
                      style={{
                        width: "140px",
                        height: "140px",
                        backgroundColor: "var(--yellow)",
                        border: "4px solid var(--blue)",
                      }}
                    >
                      {user.user?.avatar ? (
                        <img
                          src={user.user.avatar}
                          alt="avatar"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <FiUser color="#241f65" size={70} />
                      )}
                    </Avatar>
                    <h6 className="my-3 fw-bold">{user?.user?.username}</h6>
                  </div>
                  <button
                    onClick={() => {
                      navigate("/create");
                      toggle();
                    }}
                    className="btn profile-btn d-flex align-items-center"
                  >
                    <IoMdAdd className="me-1" size={20} />
                    <span>Elan Əlavə Et</span>
                  </button>
                </div>
              ) : (
                <div className="avatar__container d-flex flex-column ">
                  <Avatar
                    circle
                    alt="@SevenOutman"
                    style={{
                      width: "140px",
                      height: "140px",
                      backgroundColor: "var(--yellow)",
                      border: "4px solid var(--blue)",
                    }}
                  >
                    <FiUser color="#241f65" size={70} />
                  </Avatar>
                  <button
                    onClick={() => {
                      navigate("/signin");
                    }}
                    className="btn profile-btn mt-4 d-flex align-items-center"
                  >
                    <BiLogIn className="me-2" size={20} />
                    <span>Daxil Olun</span>
                  </button>
                </div>
              )}
            </div>
            {session && (
              <ul className="menu">
                <li
                  onClick={() => {
                    toggle();
                    navigate("/profile", {
                      state: { tab: 0 },
                    });
                  }}
                >
                  Profil
                </li>
                <li
                  onClick={() => {
                    toggle();
                    navigate("/create");
                  }}
                >
                  Elan Əlavə Et
                </li>
                <li
                  onClick={() => {
                    toggle();
                    navigate("profile", {
                      state: { tab: 2 },
                    });
                  }}
                >
                  Elanlarım
                </li>
                <li
                  onClick={() => {
                    toggle();
                    navigate("/profile", {
                      state: { tab: 3 },
                    });
                  }}
                >
                  Yadda Saxlanılanlar
                </li>
                <li
                  onClick={() => {
                    toggle();
                    navigate("/profile", {
                      state: { tab: 4 },
                    });
                  }}
                >
                  Bildirişlər
                </li>
                <li
                  className="mb-0"
                  onClick={() => {
                    localStorage.removeItem("session");
                    localStorage.removeItem("token");
                    setSession(null);
                    setTimeout(() => {
                      toggle();
                      window.location.reload();
                    }, 500);
                  }}
                >
                  Çıxış
                </li>
              </ul>
            )}
          </div>
        </div>
        {/*<div*/}
        {/*  className="py-2 d-flex align-items-center justify-content-center w-100"*/}
        {/*  style={{*/}
        {/*    backgroundColor: "var(--yellow)",*/}
        {/*    // position: "fixed",*/}
        {/*    height: "50px",*/}
        {/*    // bottom: "env(safe-area-inset-bottom)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <p className="m-0 fs-6 fw-bold">Bütün hüquqlar qorunur.</p>*/}
        {/*</div>*/}
      </SidebarWrapper>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(React.memo(Sidebar));
