import test from 'tape';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { DashboardApi } from './DashboardApi';

test('[DashboardApi]', (t) => {
  t.test('--getDashboard, passing filters, calls the api and returns response', async (a) => {
    const mock = new MockAdapter(axios);
    const data = { chart: [], cards: {} };
    mock.onGet('/dashboard?anio=2018&mes=2&ops=ABC').reply(200, data);
    const filters = { year: 2018, month: 2, ops: 'ABC' };

    const response = await DashboardApi.getDashboard(filters);

    a.deepEqual(response.data, data, 'Data should be returned');
    mock.restore();
    a.end();
  });
  t.skip('');
});
