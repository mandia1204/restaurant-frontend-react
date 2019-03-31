import SecurityApi from '../api/SecurityApi';

const securityApi = SecurityApi();
const UserService = () => {
  const getUsers = () => securityApi.getUsers();
  const saveUser = user => (user.id ? securityApi.updateUser(user) : securityApi.saveUser(user));

  return {
    getUsers,
    saveUser,
  };
};

export default UserService;
