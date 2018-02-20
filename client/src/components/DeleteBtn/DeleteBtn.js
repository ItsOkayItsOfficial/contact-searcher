import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);

export default DeleteBtn;
