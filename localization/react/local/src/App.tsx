import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Selector from "./compo/Selector";
import ContextProviders from "./compo/ContextProvider";
import { LangProvider } from "./compo/LangContext";
import SampleTextDisplay from "./compo/SampleText";

function App() {
  return (
    <ContextProviders providers={[LangProvider]}>
      <div className="App">
        <Selector />
        <SampleTextDisplay />
      </div>
    </ContextProviders>
  );
}

export default App;
