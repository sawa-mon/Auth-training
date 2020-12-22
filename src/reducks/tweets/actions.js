export const FETCH_TWEET = "FETCH_TWEET";
export const fetchCreateTweetAction = (tweets) => {
  return {
    type: FETCH_TWEET,
    paylpad: tweets,
  };
};
