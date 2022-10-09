import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './paginas/Home';
import OpcaoMais from './paginas/OpcaoMais';
import HomeZero from './paginas/HomeZero';
import AddMedicamento from './paginas/AddMedicamento';
import AgendarMedicamento from './paginas/AgendarMedicamento';

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
  <BrowserRouter>
      <Routes>
        <Route path="/homezero" element={<HomeZero />} /> 
        <Route path="/opcaomais" element={<OpcaoMais />} /> 
        <Route path="/addmedicamento" element={<AddMedicamento />} /> 
        <Route path="/agendarmedicamento" element={<AgendarMedicamento />} /> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


