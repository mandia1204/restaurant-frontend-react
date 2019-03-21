import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import LoginCredentials from '../types/LoginCredentials';
import User from '../types/User';

const users: User[] = [{
  id: 1, userName: 'mandia', name: 'Marvin Andia', isAdmin: true,
},
{
  id: 2, userName: 'jperez', name: 'Jose Perez', isAdmin: false,
},
{
  id: 3, userName: 'mlopez', name: 'Mario Lopez', isAdmin: false,
}];

const getUsers = () => new Promise<User[]>((resolve) => {
  resolve(users);
});

const http = HttpWrapper(config.authUri);
const SecurityApi = () => {
  const authenticate = (credentials: LoginCredentials) => http.post('/token', credentials);

  return {
    authenticate,
    getUsers,
  };
};

export default SecurityApi;
