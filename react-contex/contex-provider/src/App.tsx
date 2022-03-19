import React from "react";
import logo from "./logo.svg";
import "./App.css";

const TimeContext = React.createContext({ time: "Time1" });
const ThemeContext = React.createContext({ theme: "black" });

class Time extends React.Component {
  static contextType = TimeContext;
  // find out how to use second context in this class

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const timeData = this.context;
    return <div>The time is {timeData.time}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={{ theme: "blue" }}>
        <TimeContext.Provider value={{ time: "Time2" }}>
          <div className="App">
            <header className="App-header">
              <Time></Time>
            </header>
          </div>
        </TimeContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
