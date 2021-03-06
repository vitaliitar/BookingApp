import axios from 'axios';

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  CLEAR_AUTH_ERROR,
} from '../action-types/auth';

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR,
});

// Sign up action creators
const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});
const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
  },
});
const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const signUp = (user, history) => function (dispatch) {
  dispatch(signUpRequest());
  axios({
    method: 'post',
    url: '/signup',
    data: user,
  })
    .then((response) => {
      const { data } = response.data;
      dispatch(signUpSuccess(data));
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
      dispatch(signUpFailure(error));
    });
};

// Sign in action creators
const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});
const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    token,
  },
});
const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const signIn = (payload, history) => function (dispatch) {
  dispatch(signInRequest);
  axios({
    method: 'post',
    url: '/signin',
    data: payload,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('USER-TOKEN')}`,
    },
  })
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem('USER-TOKEN', token);
      dispatch(signInSuccess(token));
      history.push('/home');
    })
    .catch((error) => {
      dispatch(signInFailure(error));
    });
};

// sign out action creators
export const signOutRequest = function () {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = function () {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = function () {
  return {
    type: SIGN_OUT_FAILURE,
  };
};

export const signOut = function (history) {
  return function (dispatch) {
    dispatch(signOutRequest());
    localStorage.clear();
    history.push('/signin');
    if (localStorage.getItem('USER_TOKEN')) {
      dispatch(signOutFailure());
    } else {
      dispatch(signOutSuccess());
    }
  };
};
