import { AxiosResponse } from 'axios';
import User from '../../types/User';
import LoginCredentials from '../../types/LoginCredentials';

const SecurityApi = () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTIwMDY5OTcsImV4cCI6MTU4MzU0Mjk5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJOYW1lIjoibWF0dCJ9.L_gzR5r0bPr-RyXVGsXwcHjn6wxpByfjYUa0mLJT3fI';
  const authenticate = (credentials:LoginCredentials) => new Promise<AxiosResponse>((resolve) => { //eslint-disable-line
    const response: AxiosResponse<any> = {
      data: { token }, status: 200, statusText: 'OK', headers: null, config: {},
    };
    resolve(response);
  });

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

  return {
    authenticate,
    getUsers,
  };
};

export default SecurityApi;
