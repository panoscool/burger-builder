import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

function Checkout(props) {
  const { ingredients } = useSelector((state) => state.burger);
  const { purchased } = useSelector((state) => state.order);

  const checkoutCancelled = () => {
    props.history.goBack();
  };

  const checkoutContinued = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summary = <Redirect to="/" />;
  if (ingredients) {
    const purchasedRedirect = purchased ? (
      <Redirect to="/" />
    ) : null;
    summary = (
      <Fragment>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={checkoutCancelled}
          checkoutContinued={checkoutContinued}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </Fragment>
    );
  }
  return summary;
}

export default Checkout;
