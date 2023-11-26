import { call, put, takeEvery } from 'redux-saga/effects';

import { login, register } from '../apis/authApi';
import { loginSuccessful, logoutSuccessful } from '../Reducers/authSlice';

function* loginSaga(action) {
  try {
    const res = yield call(login, action.payload);
    yield put(loginSuccessful(res.data));
  } catch (error) {
    console.error(error);
  }
}

function* registerSaga() {
  try {
    const res = yield call(register);
    yield put(loginSuccessful(res.data));
  } catch (error) {
    console.error(error);
  }
}

function* logoutSaga() {
  try {
    yield put(logoutSuccessful());
  } catch (error) {
    console.error(error);
  }
}

export function* watchAuth() {
  yield takeEvery('auth/loginLoading', loginSaga);
  yield takeEvery('auth/registerLoading', registerSaga);
  yield takeEvery('auth/logoutLoading', logoutSaga);
}
