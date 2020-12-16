import * as Actions from "./actions";
import initialState from "../store/initialState";

export const TweetsReducer = (state = initialState.tweets, action) => {
  switch (action.type) {
    case Actions.FETCH_CREATE_TWEET:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
