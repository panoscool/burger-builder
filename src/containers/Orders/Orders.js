import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { fetchOrders } from '../../store/actions';

function Orders() {
  const dispatch = useDispatch();
  const { token, userId } = useSelector((state) => state.auth);
  const { orders, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders(token, userId))
  }, [dispatch, token, userId]);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      {orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ))}
    </Fragment>
  )
}

export default withErrorHandler(Orders, axios)
