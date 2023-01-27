import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// store for redux stuff
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wrapped whole App by Provider(redux)
  <Provider store={store}>
    <App />
  </Provider>
);
