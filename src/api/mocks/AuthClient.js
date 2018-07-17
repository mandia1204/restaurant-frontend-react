import LocalStorageWrapper from '../../wrappers/LocalStorageWrapper';
import { tokenKey } from '../../util/Constants';

const token = 'jikDJdjKJDjk.dwdwdw.wdwdwdw23232';
const AuthClient = () => {
  const authenticate = () => new Promise((resolve) => {
    LocalStorageWrapper.save(tokenKey, token);
    resolve({ success: true });
  });

  const logout = () => {
    LocalStorageWrapper.remove(tokenKey);
  };

  const isAuthenticated = () => LocalStorageWrapper.get(tokenKey) != null;

  const getAuthData = () => ({ userName: 'matt' });

  return {
    authenticate,
    logout,
    isAuthenticated,
    getAuthData,
  };
};

export default AuthClient;
