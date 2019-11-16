import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

const jsx = (
    // <Provider store={store}>
    <AppRouter />
  // </Provider>
);
  


ReactDOM.render(jsx, document.getElementById("root"));
