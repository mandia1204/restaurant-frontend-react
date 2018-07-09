import LocalStorageWrapper from '../../wrappers/LocalStorageWrapper';
import config from '../apiConfig';
import { HttpWrapper } from '../../wrappers/HttpWrapper';

const http = HttpWrapper(config.authUri);
const AuthClient = () => {
    const authenticate = (credentials) => {
        return http.post('/token', credentials)
            .then(onAuthSuccess)
            .catch(onAuthFail);
    };

    const onAuthSuccess = (response) => {
        LocalStorageWrapper.save('AUTH_TOKEN', response.data.token);
        return { success: true};
    };

    const onAuthFail = (error) => {
        LocalStorageWrapper.remove('AUTH_TOKEN');
        return { success: false, error};
    };

    const logout = () => {
        LocalStorageWrapper.remove('AUTH_TOKEN');
    };

    const isAuthenticated = () => {
        return LocalStorageWrapper.get('AUTH_TOKEN') != null;
    };

    return {
        authenticate: authenticate,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
};

export default AuthClient;