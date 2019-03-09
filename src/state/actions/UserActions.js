import UserService from '../../services/UserService';

export const GET_USERS = 'GET_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const service = UserService();

export const receiveUsers = users => ({ type: RECEIVE_USERS, users });

export const fetchUsers = () => dispatch => service.getUsers()
  .then(response => dispatch(receiveUsers(response.data)));

export const getUsers = () => ({ type: GET_USERS });
