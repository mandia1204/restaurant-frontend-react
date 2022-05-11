import { put, call, all, takeEvery, fork } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import UserService from '../../services/UserService';
import { receiveUsers, updateUserSuccess, saveUserSuccess } from '../reducers/UsersSlice';
import { formSubmitSuccess } from '../reducers/UserPageSlice';

import User from '../../types/User';

const service = UserService();

const getUsers = () => service.getUsers();
const callSaveUser = (user: User) => service.saveUser(user);

function* fetchUsers() {
  const { data }: AxiosResponse<User[]> = yield call(getUsers);
  yield put(receiveUsers(data));
}

function* saveUser({ payload } : any) {
  const { data }: AxiosResponse<User> = yield call(callSaveUser, payload);
  const isExisting = !!payload.id;
  yield put(isExisting ? updateUserSuccess(data) : saveUserSuccess(data));
  yield put(formSubmitSuccess(isExisting ? '' : data.id));
}

function* watchUpdateUser() {
  yield takeEvery('users/updateUser', saveUser);
}

function* watchFetchUsers() {
  yield takeEvery('users/fetchUsers', fetchUsers);
}

export default function* userSagas() {
  yield all([
    fork(watchFetchUsers),
    fork(watchUpdateUser),
  ]);
}
