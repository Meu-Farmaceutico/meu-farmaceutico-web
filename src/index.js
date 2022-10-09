import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './paginas/Home';
// import Produto from './paginas/Produto';
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyBVfnA9fFja_fgFviC35LbFimxeJIMo83A",
//   authDomain: "meu-farmaceutico.firebaseapp.com",
//   projectId: "meu-farmaceutico",
//   storageBucket: "meu-farmaceutico.appspot.com",
//   messagingSenderId: "809059300133",
//   appId: "1:809059300133:web:690470dee5273ed77ce0cc"
// };

// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

// messaging.getToken({vapidKey: "BNnG83ek05DQYFDOjEsf98f4-cUoxvWCOrvJI2h6-ExkVaxBmV58dDP0IE8N4CJct9dQdrsY4ZdrEK-URhRydxU"});

const root = ReactDOM.createRoot(document.getElementById('root'));

Notification.requestPermission().then(function (permission) {

  console.log(permission);

  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Seja bem-vinda!");
    navigator.vibrate([1000, 2000, 3000, 2000, 5000]);
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

});

root.render(
  <React.StrictMode>
    {/* <Produto /> */}
    <Home />
  </React.StrictMode>
);


