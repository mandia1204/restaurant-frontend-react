import LocalStorageWrapper from '../../util/LocalStorageWrapper';

const AuthClient = () => {
    const localStorageWrapper = LocalStorageWrapper();
    const authenticate = () => {
        localStorageWrapper.save('authenticated', true);
    };

    const logout = () => {
        localStorageWrapper.save('authenticated', false);
    };

    const isAuthenticated = () => {
        return localStorageWrapper.get('authenticated') === 'true';
    };

    return {
        authenticate: authenticate,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
};

export default AuthClient;