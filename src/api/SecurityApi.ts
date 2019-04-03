import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import LoginCredentials from '../types/LoginCredentials';
import User from '../types/User';

let users: User[] = [{
  id: 1, userName: 'mandia', name: 'Marvin Andia', isAdmin: true,
},
{
  id: 2, userName: 'jperez', name: 'Jose Perez', isAdmin: false,
},
{
  id: 3, userName: 'mlopez', name: 'Mario Lopez', isAdmin: false,
},
{
  id: 4, userName: 'agomez', name: 'Abel Gomez', isAdmin: true,
}];

const getUsers = () => new Promise<User[]>((resolve) => {
  resolve(users);
});

const saveUser = (user: User) => new Promise<User>((resolve) => {
  const newUser = { ...user, id: Math.floor(Math.random() * 1000) };
  users = [...users, newUser];
  setTimeout(() => resolve(newUser), 1500);
  // api POST
});

const updateUser = (user: User) => new Promise<User>((resolve) => {
  users = users.map(u => (u.id === user.id ? user : u));
  setTimeout(() => resolve(user), 1500);
  // api PUT
});

const http = HttpWrapper(config.authUri);
const SecurityApi = () => {
  const authenticate = (credentials: LoginCredentials) => http.post('/token', credentials);

  return {
    authenticate,
    getUsers,
    saveUser,
    updateUser,
  };
};

export default SecurityApi;
