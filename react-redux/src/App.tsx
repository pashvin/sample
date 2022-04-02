import React, { useContext, useEffect, useState, createContext } from "react";
import { createStore } from "redux";
import { Provider, ReactReduxContextValue } from "react-redux";
import "./App.css";

// create reduce
const TimeReducer = (state: any, action: any) => {
  if (action.time) {
    state = action.time;
  }
  return state;
};

const ThemeReducer = (state: any, action: any) => {
  if (state == "pink") {
    state = "yellow";
  } else {
    state = "pink";
  }
  return state;
};

//create store
const ThemeStore = createStore(ThemeReducer);
const TimeStore = createStore(TimeReducer);

const TimeContext = React.createContext<ReactReduxContextValue>({} as any);
const ThemeContext = React.createContext<ReactReduxContextValue>({} as any);

//create provider
const TimeProvider = ({ children }: any) => {
  return (
    <Provider store={TimeStore} context={TimeContext}>
      {children}
    </Provider>
  );
};

const ThemeProvider = ({ children }: any) => {
  return (
    <Provider store={ThemeStore} context={ThemeContext}>
      {children}
    </Provider>
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

  const updateTime = async () => {
    let date = new Date();
    timeContext.store.dispatch({
      type: "UPDATE-TIME",
      time: date.toString(),
    });
  };

  useEffect(() => {
    let timer = setInterval((_) => {
      updateTime();
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
        backgroundColor: themeContext.storeState == "pink" ? "pink" : "yellow",
      }}
    >
      The time is {timeContext.storeState} {themeContext.storeState}
    </div>
  );
}

function ThemeSelector() {
  const themeContext = useContext(ThemeContext);
  const toggleTheme = async () => {
    themeContext.store.dispatch({ type: "TOGGLE" });
  };
  return <button onClick={toggleTheme}>Toggle Theme</button>;
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
