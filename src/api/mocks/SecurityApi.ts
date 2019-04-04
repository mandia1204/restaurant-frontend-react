import { AxiosResponse } from 'axios';
import User from '../../types/User';
import LoginCredentials from '../../types/LoginCredentials';

const SecurityApi = () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTIwMDY5OTcsImV4cCI6MTU4MzU0Mjk5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJOYW1lIjoibWF0dCJ9.L_gzR5r0bPr-RyXVGsXwcHjn6wxpByfjYUa0mLJT3fI'; //eslint-disable-line
  const authenticate = (credentials:LoginCredentials) => new Promise<AxiosResponse>((resolve) => { //eslint-disable-line
    const response: AxiosResponse<any> = {
      data: { token }, status: 200, statusText: 'OK', headers: null, config: {},
    };
    resolve(response);
  });

  let users: User[] = [{
    id: 1,
    userName: 'mandia',
    name: 'Marvin Andia',
    isAdmin: true,
    roles: [{ id: 1, roleName: 'operator' }, { id: 2, roleName: 'admin' }],
  },
  {
    id: 2, userName: 'jperez', name: 'Jose Perez', isAdmin: false, roles: [],
  },
  {
    id: 3, userName: 'mlopez', name: 'Mario Lopez', isAdmin: false, roles: [{ id: 1, roleName: 'operator' }],
  },
  {
    id: 4, userName: 'agomez', name: 'Abel Gomez', isAdmin: true, roles: [{ id: 2, roleName: 'admin' }],
  }];

  const getUsers = () => new Promise<User[]>((resolve) => {
    resolve(users);
  });

  const saveUser = (user: User) => new Promise<User>((resolve) => {
    const newUser = { ...user, id: Math.floor(Math.random() * 1000) };
    users = [...users, newUser];
    setTimeout(() => resolve(newUser), 1000);
    // api POST
  });

  const updateUser = (user: User) => new Promise<User>((resolve) => {
    users = users.map(u => (u.id === user.id ? user : u));
    setTimeout(() => resolve(user), 1000);
    // api PUT
  });

  return {
    authenticate,
    getUsers,
    saveUser,
    updateUser,
  };
};

export default SecurityApi;
