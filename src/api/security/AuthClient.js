import LocalStorageWrapper from '../../wrappers/LocalStorageWrapper';
import config from '../apiConfig';
import { HttpWrapper } from '../../wrappers/HttpWrapper';

const AuthClient = () => {
    const localStorageWrapper = LocalStorageWrapper();
    const http = HttpWrapper(config.authUri);
    const authenticate = (credentials) => {
        return http.post('/token', credentials)
            .then(onAuthSuccess)
            .catch(onAuthFail);
    };

    const onAuthSuccess = (response) => {
        localStorageWrapper.save('AUTH_TOKEN', response.data.token);
        return { success: true};
    };

    const onAuthFail = (error) => {
        localStorageWrapper.remove('AUTH_TOKEN');
        return { success: false, error};
    };

    const logout = () => {
        localStorageWrapper.remove('AUTH_TOKEN');
    };

    const isAuthenticated = () => {
        return localStorageWrapper.get('AUTH_TOKEN');
    };

    return {
        authenticate: authenticate,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
};

export default AuthClient;