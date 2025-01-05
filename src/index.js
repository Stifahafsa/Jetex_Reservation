import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
