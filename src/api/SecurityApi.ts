import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import LoginCredentials from '../types/LoginCredentials';
import User, { Role } from '../types/User';

const http = HttpWrapper(config.securityUri);
const SecurityApi = () => {
  const authenticate = (credentials: LoginCredentials) => http.post('/token', credentials);
  const getRoles = () => http.get<Role>('/role');
  const getUsers = () => http.get<User>('/user');
  const saveUser = (user: User) => http.post<User>('/user', user);
  const updateUser = (user: User) => http.put<User>('/user', user);

  return {
    authenticate,
    getUsers,
    saveUser,
    updateUser,
    getRoles,
  };
};

export default SecurityApi;
