import { call, put, takeEvery } from 'redux-saga/effects';

import { login, register } from '../apis/authApi';
import { loginSuccessful,registerSuccessful,registerFail, logoutSuccessful,loginFail } from '../Reducers/authSlice';

function* loginSaga(action) {
  try {
    const res = yield call(login, action.payload);
    yield put(loginSuccessful(res.data));
  } catch (error) {
    yield put(loginFail(error.response.data));
    console.error(error);
  }
}

function* registerSaga(action) {
  try {
    const res = yield call(register, action.payload);
    yield put(registerSuccessful(res.data));
  } catch (error) {
    yield put(registerFail(error.response.data));
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
