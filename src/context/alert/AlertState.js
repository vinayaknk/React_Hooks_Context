import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT } from "../types";

const AlertState = props => {
  //const intialState = null;
  const intialState = { alert: "" };
  const [state, dispatch] = useReducer(AlertReducer, intialState);

  //set alert
  const setAlert = () => {
    dispatch({ type: SET_ALERT, payload: "Please enter something" });
    setTimeout(() => dispatch({ type: SET_ALERT, payload: "" }), 2000);
  };
  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
