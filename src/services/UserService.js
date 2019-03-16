import SecurityApi from '../api/SecurityApi';

const securityApi = SecurityApi();
const UserService = () => {
  const getUsers = () => securityApi.getUsers();

  return {
    getUsers,
  };
};

export default UserService;
