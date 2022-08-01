import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-kdpfh956p5wo.frontegg.com",
  clientId: "edd9e652-0a64-4f93-b1af-d7a667af6de4",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </FronteggProvider>
  //</React.StrictMode>
);
