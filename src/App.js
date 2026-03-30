import React from "react";
import "./App.css";
import GiftEnvelope from "./GiftEnvelope";
import AccessibilityWidget from "./AccessibilityWidget";
import AccessibilityTestPage from "./AccessibilityTestPage";

function App() {
  return (
    <div className="App">
      <AccessibilityWidget />
      {/* <AccessibilityTestPage /> */}
      {/* <GiftEnvelope imageUrl="https://picsum.photos/300/200" /> */}
    </div>
  );
}

export default App;