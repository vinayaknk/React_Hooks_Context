import React, { useReducer, useEffect } from "react";
import axios from "axios";
import GitHubContext from "./gitHubContext";
import GitHubReducer from "./gitHubReducer";
import * as types from "../types";

const GitHubState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.github.com/users");
      dispatch({ type: types.SEARCH_USERS, payload: response.data });
    }
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  //Search User
  const searchUser = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: types.SEARCH_USERS, payload: res.data.items });
    // setUsers(res.data.items);
  };

  //Set Loading
  const setLoading = () => ({ type: types.SET_LOADING });

  //Get Single User
  const getSingleUser = async userName => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    dispatch({ type: types.GET_USER, payload: res.data });
  };

  //Clear User
  const clearUser = () => dispatch({ type: types.CLEAR_USER });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUser,
        clearUser,
        getSingleUser
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
