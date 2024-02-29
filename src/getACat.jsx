import React, { useEffect, useState } from "react";
import Cat from "./cat.png";
import Cat2 from "./pet.png";
import { useThemeContext } from "./ProviderPattern/ThemeProvider";
const GetACat = ({ x, y, type = "HOC" }) => {
    const { theme } = useThemeContext();
    return (
        <>
            <img
                src={Cat2}
                alt="Cat"
                title="with-hoc"
                width={100}
                height={100}
                className="images"
                style={{
                    position: "absolute",
                    top: y,
                    left: x,
                    zIndex: 100,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                }}
            />
            <div
                className="bottom"
                style={{
                    position: "absolute",
                    top: y + 50,
                    left: x + 10,
                    zIndex: 100,
                    transform: "translate(-50%, -50%)",
                    ...theme,
                    borderRadius: "10px",
                    padding: "2px",
                    width: "100px",
                    textAlign: "center",
                }}
            >
                With {type}{" "}
            </div>
        </>
    );
};

export default GetACat;
