
const LocalStorageWrapper = () => {
    const save = (key, value)=> {
        localStorage.setItem(key, value);
    };

    const get = (key) => {
        return localStorage.getItem(key);
    };

    return {
        save: save,
        get: get
    };
};

export default LocalStorageWrapper;