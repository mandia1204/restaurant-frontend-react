import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { updateLoginData } from '../reducers/AppSlice';
import SecurityService from '../../services/SecurityService';

const securityService = SecurityService();

const getLoginData = () => {
  const decoded = securityService.getAuthData();
  if (decoded !== null) {
    return { name: decoded.userName, authenticated: true };
  }
  return { name: '', authenticated: false };
};

function* fetchLoginData() {
  // @ts-ignore
  const data = yield call(getLoginData);
  yield put(updateLoginData(data));
}

const watchSagas = () => function* watch() {
  yield takeEvery('appState/fetchLoginData', fetchLoginData);
};

export default function* appSagas() {
  yield all([fork(watchSagas())]);
}
