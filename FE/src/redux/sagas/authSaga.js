import { call, put, takeEvery } from 'redux-saga';

import { login, register } from '../apis/authApi';
import { loginSuccessful, logoutSuccessful } from '../Reducers/authSlice';

function* loginSaga() {
  try {
    const res = yield call(login);
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
  yield takeEvery('auth/login', loginSaga);
  yield takeEvery('auth/register', registerSaga);
  yield takeEvery('auth/logout', logoutSaga);
}
