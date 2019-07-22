import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Vaibhi", age: 26 },
      { name: "Neeraj", age: 27 },
      { name: "Joey", age: 27 }
    ]
  };

  switchNameHandler = newNAme => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newNAme, age: 26 },
        { name: "Neeraj", age: 27 },
        { name: "Joey", age: 28 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 26 },
        { name: "Neeraj", age: 27 },
        { name: "Joey", age: 28 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Vaibhav")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "vaibhi!!")}
        >
          My Hobbies: Biking
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
