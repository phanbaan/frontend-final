import React from "react";
import "./style.scss";
const Toast = ({ message, title }) => {
  return (
    <div id="toast">
      <div className="toast toast--success">
        <div className="toast__icon">
          <i className="fas fa-check-square" />
        </div>
        <div className="toast__body">
          <div className="toast__heading">{title}</div>
          <div className="toast__mess">{message}</div>
        </div>
        <div className="toast__close">
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  );
};

export default Toast;
