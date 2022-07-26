import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./module";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "./lib/loggerMiddleware";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger();
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
