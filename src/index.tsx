import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store/store";

import 'bootstrap/dist/css/bootstrap.min.css';
// import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css");


const store = setupStore();



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
