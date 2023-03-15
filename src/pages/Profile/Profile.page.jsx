import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ProfileContainer from "./Profile.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import { connect } from "react-redux";
import getUser from "../../actions/user/getUser.action.js";
import getToken from "../../actions/token/getToken.action.js";
import { FiUser } from "react-icons/fi";
import { FaPhoneAlt, FaBell, FaMapMarkerAlt } from "react-icons/fa";
import { BsMailbox2, BsBookmarkFill } from "react-icons/bs";
import { Avatar } from "rsuite";
import Loader from "../Loader/Loader.page.jsx";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GoDiffAdded } from "react-icons/go";
import { IoIosPhotos } from "react-icons/io";
import { ImExit } from "react-icons/im";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo.component.jsx";
import updateUser from "../../actions/user/updateUser.action.js";
import MyAnnouncements from "../../components/MyAnnouncements/MyAnnouncements.component.jsx";

const Profile = ({ user, getUser, getToken, updateUser, token }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [id, setId] = useState(null);

  const navigate = useNavigate();

  // const { id } = useParams();
  const location = useLocation();

  const checkSession = () => {
    if (!localStorage.getItem("session")) {
      navigate("/");
    } else {
      const userId = JSON.parse(localStorage.getItem("session")).userId;
      setId(userId);
      getToken();
    }
  };

  useEffect(() => {
    checkSession();
    if (location.state) {
      setTab(location.state.tab);
    }
  }, []);

  useEffect(() => {
    if (token.success) {
      getUser(id);
    }
  }, [token.success]);

  useEffect(() => {
    if (location.state) {
      setTab(location.state.tab);
    }
  }, [location.state]);

  useEffect(() => {
    if (user.success) {
      setUserInfo(user.user);
      setLoading(true);
    }
  }, [user.success]);

  // useEffect(() => {
  //   if (user.error) {
  //     getToken();
  //   }
  // }, [user.error]);

  return !loading ? (
    <Loader />
  ) : (
    <ProfileContainer>
      <PageBanner page="Profile" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="profile-container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="profile-header">
                    <div className="row">
                      <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
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
                          {userInfo?.avatar ? (
                            <img
                              src={userInfo.avatar}
                              alt="avatar"
                              style={{ width: "100%", height: "100%" }}
                            />
                          ) : (
                            <FiUser color="#241f65" size={70} />
                          )}
                        </Avatar>
                      </div>
                      <div className="col-12 mt-3 mt-md-0 align-items-center align-items-md-start col-md-7 d-flex flex-column justify-content-center">
                        <div className="profile-details text-center text-md-start">
                          <h5 className="profile-name fw-bold">
                            {userInfo?.username}
                            {!userInfo.username && "Adsız"}
                          </h5>
                          {userInfo.phone && (
                            <p className="profile-phone mb-0 justify-content-center justify-content-md-start  d-flex align-items-center">
                              <FaPhoneAlt
                                size={16}
                                color="#241f65"
                                className="me-2"
                              />
                              <span>{userInfo?.phone}</span>
                            </p>
                          )}
                          {userInfo.email && (
                            <p className="profile-email justify-content-center justify-content-md-start d-flex align-items-center">
                              <BsMailbox2
                                size={20}
                                color="#241f65"
                                className="me-2"
                              />
                              <span>
                                {userInfo?.email?.length > 25
                                  ? userInfo?.email.slice(0, 25) + "..."
                                  : userInfo?.email}
                              </span>
                            </p>
                          )}
                          {userInfo.location && (
                            <p className="profile-email justify-content-center justify-content-md-start d-flex align-items-center">
                              <FaMapMarkerAlt
                                size={20}
                                color="#241f65"
                                className="me-2"
                              />
                              <span>
                                {userInfo?.location?.length > 25
                                  ? userInfo?.location.slice(0, 25) + "..."
                                  : userInfo?.location}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                  <div className="profile-status">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="status-box bg-danger">
                          <h1 className="mb-0">0</h1>
                          <p className="fw-bold">Aktiv Elanlar</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mt-md-0">
                        <div className="status-box bg-success">
                          <h1 className="mb-0">0</h1>
                          <p className="fw-bold">Cəmi Elanlar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="settings shadow">
              <ul className="list-unstyled ms-0 ps-0">
                <li
                  className={
                    tab === 0
                      ? "d-flex align-items-center px-3 py-3 active"
                      : "d-flex align-items-center px-3 py-3"
                  }
                  onClick={() => setTab(0)}
                >
                  <BsFillInfoCircleFill
                    className="me-2"
                    size={20}
                    color="#241f65"
                  />
                  <span className="fw-bold">ŞƏXSİ MƏLUMATLAR</span>
                </li>
                <li
                  className={
                    tab === 1
                      ? "d-flex align-items-center px-3 py-3 active"
                      : "d-flex align-items-center px-3 py-3"
                  }
                  onClick={() => {
                    setTab(1);
                    navigate("/create");
                  }}
                >
                  <GoDiffAdded className="me-2" size={20} color="#241f65" />
                  <span className="fw-bold">ELAN ƏLAVƏ ET</span>
                </li>
                <li
                  className={
                    tab === 2
                      ? "d-flex align-items-center px-3 py-3 active"
                      : "d-flex align-items-center px-3 py-3"
                  }
                  onClick={() => setTab(2)}
                >
                  <IoIosPhotos className="me-2" size={20} color="#241f65" />
                  <span className="fw-bold">ELANLARIM</span>
                </li>
                <li
                  className={
                    tab === 3
                      ? "d-flex align-items-center px-3 py-3 active"
                      : "d-flex align-items-center px-3 py-3"
                  }
                  onClick={() => setTab(3)}
                >
                  <BsBookmarkFill className="me-2" size={20} color="#241f65" />
                  <span className="fw-bold">YADDA SAXLANILANLAR</span>
                </li>
                <li
                  className={
                    tab === 4
                      ? "d-flex align-items-center px-3 py-3 active"
                      : "d-flex align-items-center px-3 py-3"
                  }
                  onClick={() => setTab(4)}
                >
                  <FaBell className="me-2" size={20} color="#241f65" />
                  <span className="fw-bold">BİLDİRİŞLƏR</span>
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("session");
                    localStorage.removeItem("token");
                    setTimeout(() => {
                      window.location.reload();
                    }, 500);
                  }}
                  className="d-flex align-items-center px-3 py-3"
                >
                  <ImExit className="me-2" size={20} color="#241f65" />
                  <span className="fw-bold">ÇIXIŞ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt-3 mt-lg-0 col-lg-8 col-xl-9">
            <div className="setting-content shadow">
              {tab === 0 && (
                <ProfileInfo
                  setLoading={setLoading}
                  updateUser={updateUser}
                  userData={userInfo}
                />
              )}
              {tab === 2 && <MyAnnouncements userId={userInfo.id} />}
            </div>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateUser: (user) => dispatch(updateUser(user)),
    getUser: (id) => dispatch(getUser(id)),
    getToken: () => dispatch(getToken()),
    updateUser: (id, user) => dispatch(updateUser(id, user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Profile));
