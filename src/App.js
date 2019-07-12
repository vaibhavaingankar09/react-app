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

  switchNameHandler = () => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: "Vaibhav", age: 26 },
        { name: "Neeraj", age: 27 },
        { name: "Joey", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
