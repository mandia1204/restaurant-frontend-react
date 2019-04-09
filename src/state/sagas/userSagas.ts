import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import UserService from '../../services/UserService';
import Actions from '../actions/UserActions';
import UserPageActions from '../actions/UserPageActions';
import User from '../../types/User';

const { Creators, Types } = Actions;
const service = UserService();

const getUsers = () => service.getUsers();
const callSaveUser = (user: User) => service.saveUser(user);

function* fetchUsers() {
  const { data }: AxiosResponse<User[]> = yield call(getUsers);
  yield put(Creators.receiveUsers(data));
}

function* saveUser({ user }: {user: User}) {
  const { data }: AxiosResponse<User> = yield call(callSaveUser, user);
  yield put(user.id ? Creators.updateUserSuccess(data) : Creators.saveUserSuccess(data));
  yield put(UserPageActions.Creators.formSubmitSuccess(data.id));
}

function* watchSaveUser() {
  yield takeEvery(Types.SAVE_USER, saveUser);
}

function* watchUpdateUser() {
  yield takeEvery(Types.UPDATE_USER, saveUser);
}

function* watchFetchUsers() {
  yield takeEvery(Types.FETCH_USERS, fetchUsers);
}

export default function* userSagas() {
  yield all([
    fork(watchFetchUsers),
    fork(watchSaveUser),
    fork(watchUpdateUser),
  ]);
}
