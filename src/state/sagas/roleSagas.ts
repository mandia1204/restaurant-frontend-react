import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { receiveRoles } from '../reducers/RolesSlice';
import SecurityApi from '../../api/SecurityApi';
import { Role } from '../../types/User';

const api = SecurityApi();

const getRoles = () => api.getRoles();

function* fetchRoles() {
  const { data }: AxiosResponse<Role[]> = yield call(getRoles);
  yield put(receiveRoles(data));
}

function* watchFetchRoles() {
  yield takeEvery('roles/fetchRoles', fetchRoles);
}

export default function* roleSagas() {
  yield all([
    fork(watchFetchRoles),
  ]);
}
