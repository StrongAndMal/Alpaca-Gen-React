import React from "react";
import "./App.css";
import Alpaca from "./components/Alpaca";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Alpaca Generator</h1>
      </header>
      <main>
        <Alpaca />
      </main>
    </div>
  );
}

export default App;
