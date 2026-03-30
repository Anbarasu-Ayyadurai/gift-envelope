import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./styles";

(function () {

    // ✅ Inject CSS manually
    const injectStyles = () => {
        if (document.getElementById("my-widget-styles")) return;

        const styleTag = document.createElement("style");
        styleTag.id = "my-widget-styles";
        styleTag.innerHTML = styles;

        document.head.appendChild(styleTag);
    };

    const mount = (containerId, props = {}) => {
        injectStyles(); // 🔥 important

        const el = document.getElementById(containerId);

        if (!el) {
            console.error("Container not found:", containerId);
            return;
        }

        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    };

    window.MyReactWidget = {
        mount
    };

})();