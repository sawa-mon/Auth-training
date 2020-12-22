import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TweetView = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div>
      <p />
    </div>
  );
};

export default TweetView;
