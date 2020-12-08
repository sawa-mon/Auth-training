export const FETCH_CREATE_TWEET = "FETCH_CREATE_TWEET";
export const fetchCreateTweetAction = (tweets) => {
  return {
    type: FETCH_CREATE_TWEET,
    paylpad: tweets,
  };
};
