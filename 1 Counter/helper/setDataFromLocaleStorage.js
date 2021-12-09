export function setDataToLocaleStorage(key, value) {
    if (localStorage) {
      localStorage.setItem(key, value);
      return true;
    }
    return false;
  }