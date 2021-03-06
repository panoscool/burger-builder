import * as types from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case types.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case types.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case types.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    case types.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case types.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
