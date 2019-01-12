import * as types from "./actionTypes";
import axios from "../../axios-orders";
import { API_CALL } from "../../config/api";

export const addIngredient = name => {
  return {
    type: types.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: types.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

const setIngredients = ingredients => {
  return {
    type: types.FETCH_INGREDIENTS,
    ingredients: ingredients
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: types.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get(API_CALL)
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed(error));
      });
  };
};
