import React, {useEffect, useState } from 'react';
import './App.css';
import AppRouter from "./AppRouter"

declare const navigator: any; 

function App() {
  // assume app is installed
  const [installed, setInstalled] = useState(true);

  const appInstallHandler = (e:any) => {
    e.preventDefault();
    // if app is not installed, then this callback will be called
    // set flag to false.
    setInstalled(false);
  }

  const setBadge = () => {
    if( "setAppBadge" in navigator && "clearAppBadge" in navigator) {
      let max = 99;
      navigator.setAppBadge(Math.floor(Math.random() * max) + 1);
    }
  }

  let installPrompt = () => {
    let url = window.location + '';
    if (url.includes('?pwa=true')) {
      // How to detect you are under PWA shell?
      // this is a tricky part. This trick uses diff param in startup url in manifest file.
      // only PWA will use that url so that way we know app is running under PWA.
      // this will work after installing and restarting app.
      return <div className="install-note">You are already in the app. Check the app icon for badge count demo.</div>
    }
    if(!installed) {
      return (<div className="install-prompt">Please install this PWA app to see Badge count demo. 
      Already in the app but still see this message? That may happen when app is launched by installer. 
      Just restart app one time to fix it </div>)
    } else {
      return (<div className="install-prompt">Please use installed PWA app to see Badge count demo.</div>)
    }
  }

  useEffect(() => {
    let timer = setInterval((_) => {
      setBadge();
    }, 1000);

    window.addEventListener('beforeinstallprompt',appInstallHandler);

    return function cleanup() {
      if (timer) {
        clearInterval(timer);
      }
      window.removeEventListener('beforeinstallprompt',appInstallHandler);
    };
  }, []); // pass second arg as [] to avoid redraw on set status

  return (
    <div >
      <div>{installPrompt()}</div>
      <AppRouter/>
    </div>
  );
}

export default App;
