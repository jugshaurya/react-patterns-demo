import "./App.css";
import ContainerComp from "./PresentationalPattern";
import ThemeProvider from "./ProviderPattern/ThemeProvider";
import Toggle from "./ProviderPattern/Toggle";
import List from "./ProviderPattern/List";
import HOCPattern from "./HOCPattern";
import RRPPattern from "./RRPPattern";
import HookPattern from "./HookPattern";
import CompoundPattern from "./CompoundPattern";

export default function App() {
    return (
        <main>
            <ContainerComp />
            <ThemeProvider>
                <Toggle />
                <List />
                {/* <HOCPattern />
                <RRPPattern />
                <HookPattern /> */}
            </ThemeProvider>
            <CompoundPattern />
        </main>
    );
}
