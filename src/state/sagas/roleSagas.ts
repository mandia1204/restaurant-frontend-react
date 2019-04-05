import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import Actions from '../actions/RoleActions';
import SecurityApi from '../../api/mocks/SecurityApi';
import { Role } from '../../types/User';

const { Creators, Types } = Actions;
const api = SecurityApi();

const getRoles = () => api.getRoles();

function* fetchRoles() {
  const roles: Role[] = yield call(getRoles);
  yield put(Creators.receiveRoles(roles));
}

function* watchFetchRoles() {
  yield takeEvery(Types.FETCH_ROLES, fetchRoles);
}

export default function* roleSagas() {
  yield all([
    fork(watchFetchRoles),
  ]);
}
