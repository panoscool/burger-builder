import React from "react";

import "./Input.css";

const Input = props => {
  let inputElement = null;
  let validationError = null;
  const inputStyles = ["InputElement"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push("Invalid");
  }

  if (props.invalid && props.touched) {
    validationError = (
      <p className="ValidationError">Please enter a valid value!</p>
    );
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputStyles.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
