import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import Actions from '../actions/DashboardActions';
import { DashboardApi } from '../../api/DashboardApi';
import DashboardFilters from '../../types/DashboardFilters';
import { DashboardModel } from '../../types/Dashboard';

const { Creators, Types } = Actions;
const client = DashboardApi();

const getDashboard = (filters: DashboardFilters) => client.getDashboard(filters);

function* fetchDashboard({ filters }: {filters: DashboardFilters}) {
  const { data }: AxiosResponse<DashboardModel> = yield call(getDashboard, filters);
  yield put(Creators.receiveDashboard(data));
}

const watchSagas = () => function* watch() {
  yield takeEvery(Types.FETCH_DASHBOARD, fetchDashboard);
};

export default function* dashboardSagas() {
  yield all([fork(watchSagas())]);
}
