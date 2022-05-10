import axios from 'axios';
// eslint-disable-next-line
import MockAdapter from 'axios-mock-adapter';

const roles = [
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

const adapterMock = new MockAdapter(axios);
adapterMock.onGet('/securityApi/role').reply(200, roles);

export default adapterMock;
