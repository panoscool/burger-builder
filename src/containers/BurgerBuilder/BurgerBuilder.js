import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import {
  addIngredient,
  removeIngredient,
  initIngredients,
  purchaseInit,
  setAuthRedirectPath
} from "../../store/actions";

function BurgerBuilder(props) {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { ingredients, totalPrice, error } = useSelector(state => state.burger);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    dispatch(initIngredients());
  }, [dispatch]);

  function updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  const purchaseHandler = () => {
    if (token) {
      setPurchasing(true);
    } else {
      dispatch(setAuthRedirectPath("/checkout"));
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    dispatch(purchaseInit());
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = error ? (
    <p style={{ textAlign: "center" }}>Ingredients can't be loaded!</p>
  ) : (
    <Spinner />
  );

  if (ingredients) {
    burger = (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={ingName => dispatch(addIngredient(ingName))}
          ingredientRemoved={ingName => dispatch(removeIngredient(ingName))}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ingredients)}
          ordered={purchaseHandler}
          price={totalPrice}
          isAuth={token}
        />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        price={totalPrice}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
}

export default withErrorHandler(BurgerBuilder, axios);
