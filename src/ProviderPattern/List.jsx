import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ContainerComp from "../PresentationalPattern";

const List = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={theme}>
            <ContainerComp />
            <div style={theme}>Provider Pattern: Theme Demo</div>
        </div>
    );
};

export default List;
