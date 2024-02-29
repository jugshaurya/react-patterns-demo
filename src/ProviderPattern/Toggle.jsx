import React from "react";
import { useThemeContext } from "./ThemeProvider";

export default function Toggle() {
    const { toggleTheme } = useThemeContext();

    return (
        <label className="switch">
            <input
                type="checkbox"
                onClick={toggleTheme}
                style={{ width: "30px", height: "30px" }}
            />
            <span className="slider round" />
        </label>
    );
}
