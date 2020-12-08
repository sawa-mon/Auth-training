import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../firebase";
import { getTweetList } from "../reducks/tweets/selectors";

const TweetApp = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState("");

  const inputList = useCallback(
    (event) => {
      setList(event.target.value);
    },
    [setList]
  );

  useEffect(() => {
    db.collection("tweets")
      .doc()
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setList(data.list);
      });
  }, []);

  useEffect(() => {
    db.collection("tweets")
      .orderBy("tweets", "asc")
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshots) => {
          const data = snapshots.data();
          list.push({
            tweet: data.list,
          });
        });
      });
  }, []);

  return (
    <section>
      <Wrap>
        <input
          onChange={() => inputList()}
          type="text"
          placeholder="Let's tweet the current event"
        />
        <button onClick={dispatch(getTweetList())}>Tweet</button>
      </Wrap>
    </section>
  );
};

export default TweetApp;

const Wrap = styled.div``;
