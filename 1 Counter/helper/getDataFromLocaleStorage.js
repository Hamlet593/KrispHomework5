export function getDataFromLocaleStorage(key) {
    if (localStorage) {
      const value = localStorage.getItem(key);
      if (value) {
        return value;
      }
      return false;
    } else {
      throw new Error("User-ը փակել է Local Storage-ը");
    }
  }