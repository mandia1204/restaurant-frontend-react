import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';

const http = HttpWrapper(config.authUri);
const SecurityApi = () => {
  const authenticate = credentials => http.post('/token', credentials);

  return {
    authenticate,
  };
};

export default SecurityApi;
