import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { receiveDashboard } from '../reducers/DashboardSlice';
import { DashboardApi } from '../../api/DashboardApi';
import DashboardFilters from '../../types/DashboardFilters';
import { DashboardModel } from '../../types/Dashboard';

export const getDashboard = (filters: DashboardFilters) => DashboardApi.getDashboard(filters);

export function* fetchDashboard({ payload }: any) {
  const { data }: AxiosResponse<DashboardModel> = yield call(getDashboard, payload);
  yield put(receiveDashboard(data));
}

export const watchSagas = () => function* watch() {
  yield takeEvery('dashboard/fetchDashboard', fetchDashboard);
};

export default function* dashboardSagas() {
  yield all([fork(watchSagas())]);
}
