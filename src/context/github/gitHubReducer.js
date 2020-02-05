import { SET_LOADING, SEARCH_USERS, CLEAR_USER, GET_USER } from "../types";
// import GitHubState from "./gitHubState";

export default (state, action) => {
  console.log("action.type ", action.type);
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };

    case CLEAR_USER:
      return { ...state, users: [], loading: false };

    case GET_USER:
      return { ...state, user: action.payload, loading: false };

    default:
      console.log("default");
      return state;
  }
};
