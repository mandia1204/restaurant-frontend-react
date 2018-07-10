import LocalStorageWrapper from '../../wrappers/LocalStorageWrapper';
import config from '../apiConfig';
import { HttpWrapper } from '../../wrappers/HttpWrapper';
import { tokenKey } from '../../util/Constants';
import jwtParser from '../../util/jwtParser';

const http = HttpWrapper(config.authUri);
const AuthClient = () => {
    const authenticate = (credentials) => {
        return http.post('/token', credentials)
            .then(onAuthSuccess)
            .catch(onAuthFail);
    };

    const onAuthSuccess = (response) => {
        LocalStorageWrapper.save(tokenKey, response.data.token);
        return { success: true};
    };

    const onAuthFail = (error) => {
        LocalStorageWrapper.remove(tokenKey);
        return { success: false, error};
    };

    const logout = () => {
        LocalStorageWrapper.remove(tokenKey);
    };

    const isAuthenticated = () => {
        return LocalStorageWrapper.get(tokenKey) != null;
    };

    const getAuthData = () => {
        return jwtParser.parse(LocalStorageWrapper.get(tokenKey));
    };

    return {
        authenticate,
        logout,
        isAuthenticated,
        getAuthData
    };
};

export default AuthClient;