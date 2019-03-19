const LocalStorageWrapper = {
  save: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  get: (key: string) => localStorage.getItem(key),
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default LocalStorageWrapper;
