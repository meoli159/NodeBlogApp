import { call, put, takeEvery } from 'redux-saga/effects';
import { createPostSuccess, deletePostSuccess, fetchPostsSuccess, updatePostSuccess } from '../Reducers/postSlice';

import { createPost, deletePost, getListPosts, updatePost } from '../apis/postApi';

function* fetchPostsSaga() {
  try {
    const res = yield call(getListPosts);
    yield put(fetchPostsSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}

function* createPostSaga(action) {
  try {
    const res = yield call(createPost, action.payload);
    yield put(createPostSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}
function* updatePostSaga() {
  try {
    const res = yield call(updatePost);
    yield put(updatePostSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}
function* deletePostsSaga() {
  try {
    const res = yield call(deletePost);
    yield put(deletePostSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchPosts() {
  yield takeEvery('post/fetchPosts', fetchPostsSaga);
  yield takeEvery('post/createPost', createPostSaga);
  yield takeEvery('post/updatePost', updatePostSaga);
  yield takeEvery('post/deletePost', deletePostsSaga);
}
