import Axios from 'axios';
import { LOGIN, LOGGEDIN } from './types';

export const login = user => async dispatch => {
  const res = await Axios.post('/api/login', user);
  dispatch({
    type: LOGIN,
    payload: res.data
  });
};

export const loggedIn = () => async dispatch => {
  const res = await Axios.post('/api/loggedIn');
  dispatch({
    type: LOGGEDIN,
    payload: res.data
  });
};
