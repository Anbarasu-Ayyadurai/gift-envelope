import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

(function () {
    const mount = (containerId, props = {}) => {
        const el = document.getElementById(containerId);

        if (!el) {
            console.error("Container not found:", containerId);
            return;
        }

        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    };

    // 🔥 FORCE GLOBAL (this WILL NOT be overridden)
    window.MyReactWidget = {
        mount
    };
})();