import React from "react";

import "./Order.css";

const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span className="IngredientOutput" key={ig.name}>
        {ig.name} {ig.amount}
      </span>
    );
  });
  return (
    <div className="Order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <b>USD {props.price.toFixed(2)}</b>
      </p>
    </div>
  );
};

export default Order;
