// PACKAGE IMPORT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// FILE IMPORT
import "./index.css";
import { App } from "./components";
import { configureStore } from "./store/index";

const store = configureStore();
// console.log('store', store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
