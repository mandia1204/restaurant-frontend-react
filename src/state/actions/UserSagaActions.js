import UserService from '../../services/UserService';
import Actions from './UserActions';

const { Creators } = Actions;
const service = UserService();

export const fetchUsers = () => dispatch => service.getUsers()
  .then(response => dispatch(Creators.receiveUsers(response.data)));
