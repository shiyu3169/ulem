import { LOGIN, LOGGEDIN } from '../actions/types';

const initialState = {
  currentUser: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload
      };
    case LOGGEDIN:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
