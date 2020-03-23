import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 26 },
      { name: 'Manu', age: 29 },
    ], 
    otherState: 'some other value',
    showNames: true,
  };

  toggleNameHandler = () => {
    console.log("Calling toggleNameHandler")
    this.setState({ showNames: !this.state.showNames })
  }

  deleteNameHandler = (personIndex) => {
    console.log("Calling deleteNameHandler")
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangeHandler = (event) => {
    console.log("Calling nameChangeHandler");
    let newPersons = this.state.persons;
    console.log(event.target.id);
    
    newPersons[event.target.id].name = event.target.value;
    this.setState({
      persons: newPersons
    }) 
  }

  copyHandler = () => {
    console.log("calling copyHandler");
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = "Hiding Persons";
    
    if (this.state.showNames) {
      persons = (
        this.state.persons.map((person, index) => {
          return <Person
            key={index}
            name={person.name}
            age={person.age}
            click={() => this.deleteNameHandler(index)}
            changed={this.nameChangeHandler}
          ></Person>
        })
      )
    }

    return (
      <div className="App">
        <h1 onCopy={this.copyHandler}>Hi, I'm a React App</h1>

        <button onClick={() => this.toggleNameHandler('David')} style={style}>Toggle Names</button>
        
        <div>{persons}</div>
      </div>
    );
  }

}

export default App;




