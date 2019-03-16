import {
  put, call, all, takeEvery, fork,
} from 'redux-saga/effects';
import Actions from '../actions/DashboardActions';
import { DashboardApi } from '../../api/mocks/DashboardApi';

const { Creators, Types } = Actions;
const client = DashboardApi();

const getDashboard = filters => client.getDashboard(filters);

function* fetchDashboard({ filters }) {
  const { data } = yield call(getDashboard, filters);
  yield put(Creators.receiveDashboard(data));
}

const watchSagas = () => function* watch() {
  yield takeEvery(Types.FETCH_DASHBOARD, fetchDashboard);
};

export default function* dashboardSagas() {
  yield all([fork(watchSagas())]);
}
