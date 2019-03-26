import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import Actions from '../actions/AppActions';
import SecurityService from '../../services/SecurityService';

const { Creators, Types } = Actions;
const securityService = SecurityService();

const getLoginData = () => {
  const decoded = securityService.getAuthData();
  if (decoded !== null) {
    return { user: { name: decoded.userName }, authenticated: true };
  }
  return { user: { name: '' }, authenticated: false };
};

function* fetchLoginData() {
  const data = yield call(getLoginData);
  yield put(Creators.updateLoginData(data));
}

const watchSagas = () => function* watch() {
  yield takeEvery(Types.FETCH_LOGIN_DATA, fetchLoginData);
};

export default function* appSagas() {
  yield all([fork(watchSagas())]);
}
