import React from "react";

const Alert = ({ typeClass, title, body }) => {
  return (
    <div
      className={`alert alert-${typeClass} alert-dismissible fade show `}
      role="alert"
    >
      <div className="container">
        <strong className=" d-block text-center text-uppercase">{title}</strong>
        <p className="text-center"> {body}</p>
      </div>
      {/* <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={ () => {

        }}
      >
        <span aria-hidden="true">&times;</span>
        
      </button> */}
    </div>
  );
};

export default Alert;
