import React from "react";
import LikeCounterWrapper from "./LikeCounter.styles.js";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LikeCounter = ({ likeCount = 0 }) => {
  return (
    <Link to="/favorites">
      <LikeCounterWrapper>
        <div className="counter">{likeCount}</div>
        <BsHeartFill size={20} />
      </LikeCounterWrapper>
    </Link>
  );
};

export default LikeCounter;
