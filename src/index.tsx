// import React from 'react';
// import { Route, Switch } from "@types/react-router-dom";


import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
