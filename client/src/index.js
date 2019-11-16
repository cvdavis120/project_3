import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Divider } from "@material-ui/core";
import store from "./store/configureStore";

// const jsx = (
//   <Provider store={configureStore}>
//     <AppRouter />
//   </Provider>
// );

// ReactDOM.render(jsx, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
