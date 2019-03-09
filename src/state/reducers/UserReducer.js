import { GET_USERS, RECEIVE_USERS } from '../actions/UserActions';

const initialState = [];

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return state;
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};
