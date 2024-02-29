import { createContext, useContext, useState } from "react";
import themes from "./themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className={`theme-${theme}`}>
            <ThemeContext.Provider
                value={{
                    theme: themes[theme],
                    toggleTheme,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return theme;
};
