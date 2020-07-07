import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AppProvider } from './store/index'
import "./index.scss";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ModalProvider rootComponent={TransitionGroup}>
        <App />
      </ModalProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
