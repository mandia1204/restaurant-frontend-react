import LocalStorageWrapper from '../wrappers/LocalStorageWrapper';
import { tokenKey } from '../util/Constants';
import jwtParser from '../util/jwtParser';
import SecurityApi from '../api/SecurityApi';

const securityApi = SecurityApi();
const SecurityService = () => {
  const onAuthSuccess = (response) => {
    LocalStorageWrapper.save(tokenKey, response.data.token);
    return { success: true };
  };

  const onAuthFail = (error) => {
    LocalStorageWrapper.remove(tokenKey);
    return { success: false, error };
  };

  const authenticate = credentials => securityApi.authenticate(credentials)
    .then(onAuthSuccess)
    .catch(onAuthFail);

  const logout = () => {
    LocalStorageWrapper.remove(tokenKey);
  };

  const isAuthenticated = () => LocalStorageWrapper.get(tokenKey) != null;

  const getAuthData = () => jwtParser.parse(LocalStorageWrapper.get(tokenKey));

  return {
    authenticate,
    logout,
    isAuthenticated,
    getAuthData,
  };
};

export default SecurityService;
