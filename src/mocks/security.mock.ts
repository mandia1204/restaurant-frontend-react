// eslint-disable-next-line
import webpackMockServer from 'webpack-mock-server'; 
import User, { Role } from '../types/User';
// import nodePath from "path";

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

let users: User[] = [{
  id: '1',
  userName: 'mandia',
  name: 'Marvin Andia',
  isAdmin: true,
  roles: ['1', '2'],
},
{
  id: '2', userName: 'jperez', name: 'Jose Perez', isAdmin: false, roles: ['3'],
},
{
  id: '3', userName: 'mlopez', name: 'Mario Lopez', isAdmin: false, roles: ['1'],
},
{
  id: '4', userName: 'agomez', name: 'Abel Gomez', isAdmin: true, roles: ['2'],
}];

export default webpackMockServer.add((app, _) => {
  app.get('/securityApi/role', (_req, res) => {
    res.json(roles);
  });

  app.get('/securityApi/user', (_req, res) => {
    res.json(users);
  });

  app.post('/securityApi/user', (_req, res) => {
    const newUser = { ..._req.body, id: Math.floor(Math.random() * 1000).toString() };
    users = [...users, newUser];
    res.json(newUser);
  });
});
