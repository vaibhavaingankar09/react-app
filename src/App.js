import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p> This is really working!</p>
      <Person name="vaibhav" age="26" />
      <Person name="neeraj" age="27">
        My Hobbies: Biking
      </Person>
      <Person name="joey" age="27" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React App2")
  // );
}

export default App;
