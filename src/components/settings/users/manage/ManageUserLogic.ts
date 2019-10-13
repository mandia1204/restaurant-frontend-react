import User, { Role } from '../../../../types/User';
import { FormValues, FormUser, FormRole } from '../../../../types/components/ManageUser';

const formatUser = (user: FormUser) => ({
  ...user,
  roles: user.roles
    .filter((r) => r.selected)
    .map((u) => u.id),
});

const getUserRoles = (roles: Role[], userRoles: string[]): FormRole[] => (roles.map((r) => ({
  ...r, selected: userRoles.some((ur) => ur === r.id),
})));

const initUser = (): FormUser => ({
  id: '',
  name: '',
  userName: '',
  isAdmin: false,
  roles: [],
});

const getUserId = (paramUserId = '', newId: string) => {
  if (!newId) {
    return paramUserId;
  }
  return newId;
};

const getUser = (id: string, users: User[]) => (id ? users.filter((u) => u.id === id)[0] : initUser());

const getFormStateReset = (roles: Role[], continueAdding: boolean): FormValues => {
  const resetUser = { ...initUser(), roles: getUserRoles(roles, []) };
  return { user: resetUser, continueAdding };
};

export default {
  formatUser,
  getUserRoles,
  initUser,
  getUserId,
  getUser,
  getFormStateReset,
};
