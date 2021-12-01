import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialState);

    const changeMode = () => {
        setDarkMode(!darkMode)
    }
 return [darkMode, setDarkMode, changeMode];
}

export default useDarkMode;