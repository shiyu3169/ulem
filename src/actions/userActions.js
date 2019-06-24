import axios from 'axios';
import { LOGIN, LOGGEDIN, LOGOUT } from './types';

export const login = user => async dispatch => {
  const res = await axios.post('/api/login', user);
  dispatch({
    type: LOGIN,
    payload: res.data
  });
};

export const loggedIn = () => async dispatch => {
  const res = await axios.post('/api/loggedIn');
  dispatch({
    type: LOGGEDIN,
    payload: res.data
  });
};

export const logout = () => async dispatch => {
  await axios.post('/api/logout');
  dispatch({
    type: LOGOUT
  });
};
