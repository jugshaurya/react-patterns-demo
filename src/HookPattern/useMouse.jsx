import React, { useEffect, useState } from "react";

function useMouse() {
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

    return { x: mousePosition.x, y: mousePosition.y };
}

export default useMouse;
