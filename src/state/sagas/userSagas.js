import {
  put, call, all, takeEvery, fork,
} from 'redux-saga/effects';
import UserService from '../../services/UserService';
import Actions from '../actions/UserActions';

const { Creators, Types } = Actions;
const service = UserService();

const getUsers = () => service.getUsers();

function* fetchUsers() {
  const { data } = yield call(getUsers);
  yield put(Creators.receiveUsers(data));
}

const watchSagas = () => function* watch() {
  yield takeEvery(Types.FETCH_USERS, fetchUsers);
};

export default function* userSagas() {
  yield all([fork(watchSagas())]);
}
