import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In This lesson we are learning about the structure of a react app,
        its components and how import and export statements are used.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
