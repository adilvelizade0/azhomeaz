import React, { useState } from "react";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const bottomNavItems = [
    {
      title: "Home",
      icon: <AiFillHome size={22} />,
      activeIcon: <AiFillHome size={22} color="#034efd" />,
      onClick: () => navigate("/"),
    },
    {
      title: "Profil",
      icon: <BsPersonFill size={22} />,
      activeIcon: <BsPersonFill size={22} color="#034efd" />,
    },
    {
      title: "Elan Yarat",
      icon: <SiAddthis size={22} />,
      activeIcon: <SiAddthis size={22} color="#034efd" />,
      onClick: () => navigate("/create"),
    },
    {
      title: "Bildirişlər",
      icon: <FaBell size={22} />,
      activeIcon: <FaBell size={22} color="#034efd" />,
    },
    {
      title: "Favorilər",
      icon: <AiFillHeart size={22} />,
      activeIcon: <AiFillHeart size={22} color="#034efd" />,
    },
  ];

  return (
    <div className="App">
      <Navbar toggle={toggleDrawer} />
      <Outlet />
      <Sidebar isOpen={isOpen} toggle={toggleDrawer} />
      <div className="d-block position-relative d-lg-none">
        <BottomNavigation
          items={bottomNavItems}
          defaultSelected={0}
          onItemClick={(item) => console.log(item)}
          activeBgColor="#ffe600"
          activeTextColor="#034efd"
        />
      </div>
    </div>
  );
}

export default App;
