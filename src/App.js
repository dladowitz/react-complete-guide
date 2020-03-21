import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  const stateArr = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 },
      { name: 'Manu', age: 29 },
    ]
  });


  return (
    <div className="App">
      <h1 onCopy={this.copyHandler}>Hi, I'm a React App</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobby is Rock Climbing</Person>
    </div>
  );
}

export default app;



switchNameHandler = () => {
  console.log("Calling switchHandler");
  this.setState({ persons: [{ name: 'David', age: 43 }] })
}

copyHandler = () => {
  console.log("calling copyHandler");
}
