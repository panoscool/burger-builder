import { takeEvery } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from './authSagas';

export function* watchAuth() {
  yield takeEvery(types.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(types.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(types.AUTH_USER, authUserSaga);
  yield takeEvery(types.AUTH_CHECK_STATE, authCheckStateSaga);
}
