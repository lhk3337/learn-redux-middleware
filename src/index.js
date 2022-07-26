import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./module";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "./lib/loggerMiddleware";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
