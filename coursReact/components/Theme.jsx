import { useState } from "react";
import "./theme.css";
const Theme = () => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        const currentTheme = theme === true ? false : true;
        setTheme(currentTheme);
        document.body.className = currentTheme === true ? "light-theme" : "dark-theme";
    };

    return (        
        <>
          
            {/* <button onClick={() => changeTheme("light")}>Light</button>
            <button onClick={() => changeTheme("dark")}>Dark</button> */}

            <button onClick={changeTheme}>Change Theme</button>
            
        </>
    );
};  

export default Theme;

