import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/main.scss";

// eslint-disable-next-line no-undef
const root: HTMLElement | null = document.querySelector("#root");

if (root) {
  const hydrateRoot = createRoot(root);
  hydrateRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
