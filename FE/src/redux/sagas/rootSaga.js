import { all } from 'redux-saga/effects';
import { watchFetchPosts } from './postSaga.js';
import { watchFetchComments } from './commentSaga.js';
import { watchAuth } from './authSaga.js';

export function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchComments(), watchAuth()]);
}
