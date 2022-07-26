import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";
import createRequestThunk from "../lib/createRequestThunk";
import { startLoading, finishLoading } from "./loading";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// export const getPost = createRequestThunk(GET_POST, api.getPost);

// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPost = (id) => {
  return { type: GET_POST, payload: id };
};

export const getUsers = () => {
  return { type: GET_USERS };
};

// const getPostSaga = createRequestSaga(GET_POST, api.getPost);
// const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

function* getPostSaga(action) {
  yield put(startLoading(GET_POST));
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

const initialState = {
  post: null,
  users: null,
};

// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({ ...state, loading: { ...state.loading, GET_POST: true } }),
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false },
//       post: action.payload,
//     }),
//     [GET_POST_FAILURE]: (state, action) => ({ ...state, loading: { ...state.loading, GET_POST: false } }),
//     [GET_USERS]: (state) => ({ ...state, loading: { ...state.loading, GET_USERS: true } }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//       users: action.payload,
//     }),
//     [GET_USERS_FAILURE]: (state, action) => ({ ...state, loading: { ...state.loading, GET_USERS: false } }),
//   },
//   initialState
// );

const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return { ...state, post: action.payload };

    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default sample;
