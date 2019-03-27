import test from 'tape';
import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchDashboard, getDashboard, watchSagas } from './dashboardSagas';
import Actions from '../actions/DashboardActions';

const { Creators, Types } = Actions;
test('[dashboardSagas]', (t) => {
  t.test('--fetchDashboard, must call getDashboard then dispatch RECEIVE_DASHBOARD', (a) => {
    const filters = { year: 2019, month: 5, ops: 'abc' };
    const gen = fetchDashboard({ filters });
    const response = { data: { name: true } };

    a.deepEqual(
      gen.next().value, call(getDashboard, filters), 'must call getDashboard(filters)',
    );

    a.deepEqual(
      gen.next(response).value, put(Creators.receiveDashboard(response.data)), 'must dispatch an RECEIVE_DASHBOARD action',
    );

    a.deepEqual(gen.next(), { done: true, value: undefined }, 'must be done');

    a.end();
  });

  t.test('--watchSagas, must take FETCH_DASHBOARD action', (a) => {
    const gen = (watchSagas())();

    a.deepEqual(
      gen.next().value, takeEvery(Types.FETCH_DASHBOARD, fetchDashboard), 'takes FETCH_DASHBOARD action',
    );

    a.end();
  });
  t.skip('');
});
