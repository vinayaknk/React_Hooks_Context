import React from "react";

const Alert = props => {
  return (
    props.alert !== null && (
      <div className={`alert alert-light`}>
        <i className="fas fa-info-circle"></i> {props.alert}
      </div>
    )
  );
};

export default Alert;
