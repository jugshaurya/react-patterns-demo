import React from "react";
import GetACat from "../getACat";
import useMouse from "./useMouse";

const HookPattern = () => {
    const { x, y } = useMouse();

    return <GetACat x={x - 150} y={y} type="Hook" />;
};

export default HookPattern;
