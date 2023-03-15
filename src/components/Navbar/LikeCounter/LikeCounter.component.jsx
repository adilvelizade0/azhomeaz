import React, { useState, useEffect } from "react";
import LikeCounterWrapper from "./LikeCounter.styles.js";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LikeCounter = () => {
  const [id, setId] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      setId(session.userId);
    }
  }, []);

  return (
    <LikeCounterWrapper
      onClick={() => {
        navigate(`/profile/${id}`, { state: { tab: 3 } });
      }}
    >
      <div className="counter">{likeCount}</div>
      <BsHeartFill size={20} />
    </LikeCounterWrapper>
  );
};

export default LikeCounter;
