import React from "react";
import NotificationCounterWrapper from "./NotificationCounter.styles.js";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import LikeCounterWrapper from "../LikeCounter/LikeCounter.styles.js";

const NotificationCounter = ({ notificationCounter }) => {
  return (
    <Link to="/notifications">
      <NotificationCounterWrapper>
        <div className="counter"></div>
        <FaBell size={20} />
      </NotificationCounterWrapper>
    </Link>
  );
};

export default NotificationCounter;
