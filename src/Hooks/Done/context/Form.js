import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function Form ({toggleTheme}) {
    return (
        <Panel title={'Welcome'}>
            <Button>Sign in</Button>
            <Button>Log in</Button>
            <Button handleTheme={toggleTheme}>Switch theme</Button>
        </Panel>
    )
}


function Panel ({title, children}) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button ({children, handleTheme}) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;

    return (
        <button className={className} onClick={handleTheme}>
            {children}
        </button>
    )
}