import { AxiosResponse } from 'axios';
import LocalStorageWrapper from '../wrappers/LocalStorageWrapper';
import { tokenKey } from '../util/Constants';
import jwtParser from '../util/jwtParser';
import SecurityApi from '../api/SecurityApi';
import LoginCredentials from '../types/LoginCredentials';
import AuthData from '../types/AuthData';
import ISecurityService from '../types/ISecurityService';

const securityApi = SecurityApi();
const SecurityService = (): ISecurityService => {
  const onAuthSuccess = (response: AxiosResponse<any>) => {
    LocalStorageWrapper.save(tokenKey, response.data.token);
    return { success: true };
  };

  const onAuthFail = (error: any) => {
    LocalStorageWrapper.remove(tokenKey);
    return { success: false, error };
  };

  const authenticate = (credentials: LoginCredentials) => securityApi.authenticate(credentials)
    .then(onAuthSuccess)
    .catch(onAuthFail);

  const logout = () => {
    LocalStorageWrapper.remove(tokenKey);
  };

  const getAuthData = (): AuthData => jwtParser.parse(LocalStorageWrapper.get(tokenKey));

  const isAuthenticated = (): boolean => {
    const token = LocalStorageWrapper.get(tokenKey);
    if (!token) return false;
    // check date expiration
    const { exp }: AuthData = jwtParser.parse(token);
    if (exp < Date.now() / 1000) return false;
    return true;
  };

  return {
    authenticate,
    logout,
    isAuthenticated,
    getAuthData,
  };
};

export default SecurityService;
