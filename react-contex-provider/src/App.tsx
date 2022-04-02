import React, { useContext, useEffect, useState } from "react";
import "./App.css";

// create context
const TimeContext = React.createContext({
  time: "",
  setTime: (data: any) => {},
});

const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

//create provider
const TimeProvider = ({ children }: any) => {
  const [time, setTime] = useState("init");
  const setTimeHook = (data: any) => setTime(data);
  return (
    <TimeContext.Provider value={{ time: time, setTime: setTimeHook }}>
      {children}
    </TimeContext.Provider>
  );
};

const ThemeProvider = ({ children }: any) => {
  const [theme, toggleTheme] = useState("pink");
  const toggleThemeFn = () => {
    toggleTheme(theme == "pink" ? "yellow" : "pink");
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeFn }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ComposeProviders = ({ providers = [], children }: any) => {
  return (
    <>
      {providers.reduceRight((Accumulator: any, Current: any) => {
        return <Current>{Accumulator}</Current>;
      }, children)}
    </>
  );
};

// Child component to test context
function TimeDisplay() {
  const timeContext = useContext(TimeContext);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    let timer = setInterval((_) => {
      let date = new Date();
      timeContext.setTime(date.toString());
    }, 1000);
    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: themeContext.theme == "pink" ? "pink" : "yellow"
      }}
    >
      The time is {timeContext.time}
    </div>
  );
}

function ThemeSelector() {
  const themeContext = useContext(ThemeContext);

  return <button onClick={themeContext.toggleTheme}>Toggle Theme</button>;
}

// Main app to setup context.
function App() {
  return (
    <ComposeProviders providers={[TimeProvider, ThemeProvider]}>
      <TimeDisplay></TimeDisplay>
      <ThemeSelector></ThemeSelector>
    </ComposeProviders>
  );
}

export default App;
