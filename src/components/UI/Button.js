import React from 'react';
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
      enabled={props.enabled}
    >
      {props.children}
    </button>
  );
};

export default Button;