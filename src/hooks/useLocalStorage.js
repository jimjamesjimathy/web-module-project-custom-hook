import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const keyItem = window.localStorage.getItem(key);
    
    const [storedValue, setStoredValue] = useState(() => {
        return keyItem ? JSON.parse(keyItem) : initialValue;
    })
    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return [storedValue, setValue];
}
export default useLocalStorage;