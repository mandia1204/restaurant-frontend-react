const LocalStorageWrapper = () => {
    const save = (key, value)=> {
        localStorage.setItem(key, value);
    };

    const get = (key) => {
        return localStorage.getItem(key);
    };

    const remove = (key) => {
        localStorage.removeItem(key);
    };

    return {
        save,
        get,
        remove
    };
};

export default LocalStorageWrapper;