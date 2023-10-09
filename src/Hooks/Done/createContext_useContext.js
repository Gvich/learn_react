import ThemeContext from "./context/ThemeContext";
import Form from "./context/Form";
import './context/styles.css'
import React, {useCallback, useState} from "react";

export default function Context () {
    const [theme, setTheme] = useState('light')

    const toggleTheme = useCallback(()=> {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme])


    return (
        <ThemeContext.Provider value={theme}>
            <Form toggleTheme={toggleTheme}/>
        </ThemeContext.Provider>
    )
}