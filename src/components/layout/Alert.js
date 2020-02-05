import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== "" && (
      <div className={`alert alert-light`}>
        <i className="fas fa-info-circle"></i> {alert}
      </div>
    )
  );
};

export default Alert;
