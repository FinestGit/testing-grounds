import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { FSMLoaderContextProvider } from "./contexts/FiniteStateMachines/FSMLoaderContext";

import "./styles/main.scss";

// eslint-disable-next-line no-undef
const root: HTMLElement | null = document.querySelector("#root");

if (root) {
  const hydrateRoot = createRoot(root);
  hydrateRoot.render(
    <React.StrictMode>
      <Router>
        <FSMLoaderContextProvider>
          <App />
        </FSMLoaderContextProvider>
      </Router>
    </React.StrictMode>
  );
}
