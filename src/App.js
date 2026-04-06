import React from "react";
import "./App.css";
import AccessibilityWidget from "./accessibility/ui/AccessibilityWidget";

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