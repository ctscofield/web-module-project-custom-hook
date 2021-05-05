import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [values, setValues] = useLocalStorage("darkMode", false);
    const toggleDarkMode = (inputValue) => {
        setValues(inputValue);
    }
    return [values, toggleDarkMode];     
}

export default useDarkMode;