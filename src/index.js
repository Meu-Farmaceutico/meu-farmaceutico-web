import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './paginas/Home';
import Search from './paginas/Search';
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
root.render(
  <React.StrictMode>
    {/* <Produto /> */}
    <Home />
    {/* <Search /> */}
  </React.StrictMode>
);


