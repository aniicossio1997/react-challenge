import React from "react";

const Alert = ({ typeClass, title, body }) => {
  return (
    <div
      className={`alert alert-${typeClass} alert-dismissible fade show `}
      role="alert"
    >
      <div className="container">
        <h6 className=" d-block text-center text-capitalize">{title}</h6>
        <hr/>
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
