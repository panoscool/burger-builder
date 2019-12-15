import { combineReducers } from 'redux';

import burgerReducer from './burger';
import orderReducer from './order';
import authReducer from './auth';

export default combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  auth: authReducer
});
