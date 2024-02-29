import React, { useEffect, useState } from "react";

function MousePositionsRRP({ children }) {
    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0,
    });

    const updateMousePosition = (ev) => {
        setMousePosition({
            x: ev.clientX,
            y: ev.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return children({ x: mousePosition.x, y: mousePosition.y });
}

export default MousePositionsRRP;
