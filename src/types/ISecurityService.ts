import AuthData from './AuthData';
import LoginCredentials from './LoginCredentials';

interface ISecurityService {
  logout():void;
  authenticate(credentials:LoginCredentials):Promise<any>;
  isAuthenticated():boolean;
  getAuthData():AuthData;
}

export default ISecurityService;
