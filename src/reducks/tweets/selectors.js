import { createSelector } from "reselect";

const tweetsSelector = (state) => state.tweets;

export const getTweetList = createSelector(
  [tweetsSelector],
  (state) => state.list
);
