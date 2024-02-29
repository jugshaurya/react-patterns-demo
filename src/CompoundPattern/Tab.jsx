import React, { createContext, useContext } from "react";
import "./index.css";
const TabContext = createContext();

export default function Tab({ children, value, onChange }) {
    return (
        <div>
            <TabContext.Provider value={{ value, onChange }}>
                {children}
            </TabContext.Provider>
        </div>
    );
}

Tab.Heads = ({ children }) => {
    return <div className="heads">{children}</div>;
};

Tab.Item = ({ label, index }) => {
    const { value, onChange } = useContext(TabContext);

    return (
        <div
            onClick={() => {
                onChange(index);
            }}
            className={`item ${index === value ? "active" : null}`}
        >
            {label}
        </div>
    );
};

Tab.ContentWrapper = ({ children }) => {
    return <div className="contentWraper">{children}</div>;
};

Tab.Content = ({ children, index }) => {
    const { value } = useContext(TabContext);
    return value === index ? <div>{children}</div> : null;
};
