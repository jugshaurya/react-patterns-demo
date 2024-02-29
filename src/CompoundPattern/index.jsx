import { useState } from "react";
import "./index.css";
import Tab from "./Tab";

const CompoundPattern = () => {
    const [currentIndex, setIndex] = useState(0);

    const handleChange = (newIndex) => {
        setIndex(newIndex);
    };

    return (
        <Tab value={currentIndex} onChange={handleChange}>
            <Tab.Heads>
                <Tab.Item label={"Tab1"} index={0} />
                <Tab.Item label={"Tab2"} index={1} />
                <Tab.Item label={"Tab3"} index={2} />
                <Tab.Item label={"Tab4"} index={3} />
                <Tab.Item label={"Tab4"} index={4} />
            </Tab.Heads>
            <Tab.ContentWrapper>
                <Tab.Content index={0}>
                    <h1>I am content 1</h1>
                </Tab.Content>
                <Tab.Content index={1}>
                    <h1>I am content 2</h1>
                </Tab.Content>
                <Tab.Content index={2}>
                    <h1>I am content 3</h1>
                </Tab.Content>
                <Tab.Content index={3}>
                    <h1>I am content 4</h1>
                </Tab.Content>
                <Tab.Content index={4}>
                    <h1>I am content 5</h1>
                </Tab.Content>
            </Tab.ContentWrapper>
        </Tab>
    );
};

export default CompoundPattern;
