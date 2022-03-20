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
  const [theme, toggleTheme] = useState("black");
  const toggleThemeFn = () => {
    toggleTheme(theme == "black" ? "light" : "black");
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
function Time() {
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
    <div>
      The time is {timeContext.time} {themeContext.theme}
    </div>
  );
}

// Main app to setup context.
function App() {
  return (
    <ComposeProviders providers={[TimeProvider, ThemeProvider]}>
      <Time></Time>
    </ComposeProviders>
  );
}

export default App;
