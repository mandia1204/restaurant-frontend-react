import { AxiosResponse } from 'axios';
import User, { Role } from '../../types/User';
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
    id: '1',
    userName: 'mandia',
    name: 'Marvin Andia',
    isAdmin: true,
    roles: [{ id: '1', roleName: 'operator' }, { id: '2', roleName: 'admin' }],
  },
  {
    id: '2', userName: 'jperez', name: 'Jose Perez', isAdmin: false, roles: [{ id: '3', roleName: 'reader' }],
  },
  {
    id: '3', userName: 'mlopez', name: 'Mario Lopez', isAdmin: false, roles: [{ id: '1', roleName: 'operator' }],
  },
  {
    id: '4', userName: 'agomez', name: 'Abel Gomez', isAdmin: true, roles: [{ id: '2', roleName: 'admin' }],
  }];

  const roles: Role[] = [
    {
      id: '1', roleName: 'operator',
    },
    {
      id: '2', roleName: 'admin',
    },
    {
      id: '3', roleName: 'reader',
    },
  ];

  const getUsers = () => new Promise<AxiosResponse<User[]>>((resolve) => {
    const response: AxiosResponse<User[]> = {
      data: users, status: 200, statusText: 'OK', headers: null, config: {},
    };
    resolve(response);
  });

  const saveUser = (user: User) => new Promise<AxiosResponse<User>>((resolve) => {
    const newUser = { ...user, id: Math.floor(Math.random() * 1000).toString() };
    users = [...users, newUser];
    const response: AxiosResponse<User> = {
      data: newUser, status: 200, statusText: 'OK', headers: null, config: {},
    };
    setTimeout(() => resolve(response), 1000);
  });

  const updateUser = (user: User) => new Promise<AxiosResponse<User>>((resolve) => {
    users = users.map(u => (u.id === user.id ? user : u));
    const response: AxiosResponse<User> = {
      data: user, status: 200, statusText: 'OK', headers: null, config: {},
    };
    setTimeout(() => resolve(response), 1000);
  });

  const getRoles = () => new Promise<AxiosResponse<Role[]>>((resolve) => {
    const response: AxiosResponse<Role[]> = {
      data: roles, status: 200, statusText: 'OK', headers: null, config: {},
    };

    resolve(response);
  });

  return {
    authenticate,
    getUsers,
    saveUser,
    updateUser,
    getRoles,
  };
};

export default SecurityApi;
