import React, { useEffect, useState } from "react";

function withMousePositions(Component) {
    return (props) => {
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

        return <Component x={mousePosition.x} y={mousePosition.y} {...props} />;
    };
}

export default withMousePositions;
