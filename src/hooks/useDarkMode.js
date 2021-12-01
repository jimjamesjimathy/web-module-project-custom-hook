import { useState } from "react";




const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(true)
    }
    return [darkMode, setDarkMode, changeMode]
}

export default useDarkMode;