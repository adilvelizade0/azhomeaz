import React, { useEffect, useState } from "react";
import NotificationCounterWrapper from "./NotificationCounter.styles.js";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotificationCounter = () => {
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      setId(session.userId);
    }
  }, []);

  return (
    <NotificationCounterWrapper
      onClick={() => {
        navigate("/profile", { state: { tab: 4 } });
      }}
    >
      <div className="counter"></div>
      <FaBell size={20} />
    </NotificationCounterWrapper>
  );
};

export default NotificationCounter;
