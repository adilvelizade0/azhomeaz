import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component.jsx";
import Sidebar from "./components/Sidebar/Sidebar.component.jsx";
import "swiper/css";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import getUser from "./actions/user/getUser.action.js";
import Loader from "./pages/Loader/Loader.page.jsx";
import getAllCities from "./actions/city/getAllCity.action.js";
import getToken from "./actions/token/getToken.action.js";
import Footer from "./components/Footer/Footer.component.jsx";

function App({ getUser, user, getToken, getAllCities, token }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileId, setProfileId] = useState("");
  const [loading, setLoading] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    getAllCities();
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      getToken();
    }
  }, []);

  useEffect(() => {
    if (token.success) {
      const session = JSON.parse(localStorage.getItem("session"));
      setProfileId(session.useId);
      getUser(session.userId);
    }
  }, [token.success]);

  useEffect(() => {
    setLoading(false);
  }, [user.success]);

  const navigate = useNavigate();

  const bottomNavItems = [
    {
      // title: "Home",
      icon: <AiFillHome size={30} color="#241f65" />,
      activeIcon: <AiFillHome size={30} color="#241f65" />,
      onClick: () => navigate("/"),
    },
    {
      // title: "Profil",
      icon: <BsPersonFill size={30} color="#241f65" />,
      activeIcon: <BsPersonFill size={30} color="#241f65" />,
      onClick: () => navigate("/profile"),
    },
    {
      // title: "Elan Yarat",
      icon: <SiAddthis size={30} color="#241f65" />,
      activeIcon: <SiAddthis size={30} color="#241f65" />,
      onClick: () => navigate("/create"),
    },
    {
      // title: "Favorilər",
      icon: <AiFillHeart size={30} color="#241f65" />,
      activeIcon: <AiFillHeart size={30} color="#241f65" />,
      onClick: () => navigate("/profile", { state: { tab: 3 } }),
    },
    {
      // title: "Bildirişlər",
      icon: <FaBell size={30} color="#241f65" />,
      activeIcon: <FaBell size={30} color="#241f65" />,
      onClick: () => navigate("/profile", { state: { tab: 4 } }),
    },
  ];

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar toggle={toggleDrawer} />
          <Outlet />
          <Sidebar isOpen={isOpen} toggle={toggleDrawer} />
          <div className="d-block position-relative d-lg-none">
            <BottomNavigation
              items={bottomNavItems}
              defaultSelected={0}
              onItemClick={(item) => console.log(item)}
              activeBgColor="#ffe600"
              activeTextColor="#241f65"
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(getUser(id)),
    getToken: () => dispatch(getToken()),
    getAllCities: () => dispatch(getAllCities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
