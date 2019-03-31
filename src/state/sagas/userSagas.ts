import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import UserService from '../../services/UserService';
import Actions from '../actions/UserActions';
import UserPageActions from '../actions/UserPageActions';
import User from '../../types/User';

const { Creators, Types } = Actions;
const service = UserService();

const getUsers = () => service.getUsers();
const callSaveUser = (user: User) => service.saveUser(user);

function* fetchUsers() {
  const users: User[] = yield call(getUsers);
  yield put(Creators.receiveUsers(users));
}

function* saveUser({ user }: {user: User}) {
  const isEdit = user.id > 0;
  const newUser: User = yield call(callSaveUser, user);
  yield put(isEdit ? Creators.updateUserSuccess(newUser) : Creators.saveUserSuccess(newUser));
  yield put(UserPageActions.Creators.formSubmitSuccess(newUser.id));
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
