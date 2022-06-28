import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

let countStore = { num: 15 };

let reducer = (state: any = countStore, action: any) => {
  if (action.type === "inc") {
    return { num: state.num + 1 };
  }
  if (action.type === "dec") {
    return { num: state.num - 1 };
  }
  return state;
};

let store = configureStore({ reducer: reducer });

function Counter(props: any) {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.num);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec
      </button>
      <div>{counter}</div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
