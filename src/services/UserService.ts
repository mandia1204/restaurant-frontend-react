import SecurityApi from '../api/SecurityApi';
import User from '../types/User';

const securityApi = SecurityApi();
const UserService = () => {
  const getUsers = () => securityApi.getUsers();
  const saveUser = (user: User) => (user.id ? securityApi.updateUser(user) : securityApi.saveUser(user));

  return {
    getUsers,
    saveUser,
  };
};

export default UserService;
