import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

declare const navigator: any; 

function App() {

  useEffect(() => {
    let timer = setInterval((_) => {
      if( "setAppBadge" in navigator && "clearAppBadge" in navigator) {
        let max = 99;
        navigator.setAppBadge(Math.floor(Math.random() * max) + 1);
      }
    }, 1000);
    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []); // pass second arg as [] to avoid redraw on set status

  return (
    <div >
      Hello
    </div>
  );
}

export default App;
