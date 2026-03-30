import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

window.MyReactWidget = {
    mount: (containerId, props = {}) => {
        const el = document.getElementById(containerId);
        if (!el) return;

        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    }
};