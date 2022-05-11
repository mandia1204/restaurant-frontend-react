import test from 'tape';
import { put, call, takeEvery } from 'redux-saga/effects';
import { receiveDashboard } from '../reducers/DashboardSlice';
import { fetchDashboard, getDashboard, watchSagas } from './dashboardSagas';

test('[dashboardSagas]', (t) => {
  t.test('--fetchDashboard, must call getDashboard then dispatch RECEIVE_DASHBOARD', (a) => {
    const filters = { year: 2019, month: 5, ops: 'abc' };
    const gen = fetchDashboard({ payload: filters });
    const response = { data: { name: true } };

    a.deepEqual(gen.next().value, call(getDashboard, filters), 'must call getDashboard(filters)');

    a.deepEqual(gen.next(response).value, put(receiveDashboard(response.data)), 'must dispatch an RECEIVE_DASHBOARD action');

    a.deepEqual(gen.next(), { done: true, value: undefined }, 'must be done');

    a.end();
  });

  t.test('--watchSagas, must take FETCH_DASHBOARD action', (a) => {
    const gen = (watchSagas())();

    a.deepEqual(gen.next().value, takeEvery('dashboard/fetchDashboard', fetchDashboard), 'takes dashboard/fetchDashboard action');

    a.end();
  });
  t.skip('');
});
