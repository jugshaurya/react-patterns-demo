import React from "react";
import MousePositionsRRP from "./MousePositionsRRP";
import GetACat from "../getACat";

const RRPPattern = () => {
    const fn = ({ x, y }) => <GetACat x={x + 150} y={y} type="renderProps" />;
    return <MousePositionsRRP>{fn}</MousePositionsRRP>;
};

export default RRPPattern;
