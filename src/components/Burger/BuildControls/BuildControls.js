import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <b>{props.price.toFixed(2)}</b>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
        less={() => props.ingredientRemoved(ctrl.type)}
        more={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? "ORDER NOW" : "LOGIN TO ORDER"}
    </button>
  </div>
);

export default BuildControls;
