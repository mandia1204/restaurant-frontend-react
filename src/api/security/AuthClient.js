const AuthClient = () => {
    const authenticate = () => {
        localStorage.setItem('authenticated', true);
        return 'token1234';
    };

    const logout = () => {
        localStorage.setItem('authenticated', false);
    };

    const isAuthenticated = () => {
        return localStorage.getItem('authenticated') === 'true';
    };

    return {
        authenticate: authenticate,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
};

export default AuthClient;