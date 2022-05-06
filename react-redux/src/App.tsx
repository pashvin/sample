import React, { useContext, useEffect, useState } from "react";
import { createStore } from "redux";
import { Provider, ReactReduxContextValue, useSelector } from "react-redux";
import "./App.css";

// create reduce. Advantage of redux pattern is state logic is maintained 
// in a single place. Two separate out each one you can have multiple stores
// and each one can have own reducer  
const TimeReducer = (state = { time: "" }, action: any) => {
  if (action.time) {
    state.time = action.time;
  }
  return state;
};

const ThemeReducer = (state = { theme: "pink" }, action: any) => {
  if (state.theme == "pink") {
    state.theme = "yellow";
  } else {
    state.theme = "pink";
  }
  return state;
};

//create store
const ThemeStore = createStore(ThemeReducer);
const TimeStore = createStore(TimeReducer);

const TimeContext = React.createContext<ReactReduxContextValue>({} as any);
const ThemeContext = React.createContext<ReactReduxContextValue>({} as any);

//create provider because we have two diff store.
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

  // There must be a way to monitor redux store data.
  // if there is a single store , then we can use selector but
  // for multiple store find out how to use selector.
  const [localTheme, setLocalTheme] = useState(themeContext.store.getState().theme);
  const [localTime, setLocalTime] = useState(timeContext.store.getState().time);

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

    // for single store , you can use connect or userSelector 
    // but for multiple store you will have to subscribe for 
    // update manually. It is very inconvenient so there must be a better way.
    const themeUnSub = themeContext.store.subscribe(() => {
      setLocalTheme(themeContext.store.getState().theme);
    });
    const timeUnSub = timeContext.store.subscribe(() => {
      setLocalTime(timeContext.store.getState().time);
    });
    return function cleanup() {
      console.log('cleanup');
      if (timer) {
        clearInterval(timer);
      }
      if (themeUnSub) {
        themeUnSub();
      }
      if (timeUnSub) {
        timeUnSub();
      }
    };
  }, []); // pass second arg as [] to avoid redraw on set status

  return (
    <div
      style={{
        backgroundColor: localTheme == "pink" ? "pink" : "yellow",
      }}
    >
      The time is {localTime}
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
