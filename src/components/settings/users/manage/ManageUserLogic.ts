import User, { Role } from '../../../../types/User';
import { FormValues, FormUser, FormRole } from '../../../../types/components/ManageUser';

const formatUser = (user: any) => ({
  ...user,
  roles: user.roles
    .filter((u: any) => u.selected).map((u: any) => ({ id: u.id })),
});

const getUserRoles = (roles: Role[], userRoles: Role[]): FormRole[] => (roles.map(r => ({
  ...r, selected: userRoles.some(e => e.id === r.id),
})));

const initUser = (): FormUser => ({
  id: 0,
  name: '',
  userName: '',
  isAdmin: false,
  roles: [],
});

const getUserId = (paramUserId: string, newId: number) => {
  if (!newId) {
    return paramUserId ? parseInt(paramUserId, 10) : 0;
  }
  return newId;
};

const getUser = (id: number, users: User[]) => (id ? users.filter(u => u.id === id)[0] : initUser());

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
