//styled-components.com/
// formidable.com/open-source/radium/

import React, { Component } from "react";
import classes from './App.css';
import Person from '../components/Persons/Person/Person';


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

  nameChangeHandler = (event, personIndex) => {
    console.log("Calling nameChangeHandler");
    const newPersons = [...this.state.persons];
    console.log("event.target.id: ", event.target.id)
    
    
    newPersons[event.target.id].name = event.target.value;
    this.setState({
      persons: newPersons
    }) 
  }

  copyHandler = () => {
    console.log("calling copyHandler");
  }

  render () {
    let persons = "";
    let btnClass = [classes.Button]
    
    if (this.state.showNames) {
      persons = (
        this.state.persons.map((person, index) => {
          return <Person
            key={index}
            id={index}
            name={person.name}
            age={person.age}
            click={() => this.deleteNameHandler(index)}
            changed={(event) => this.nameChangeHandler(event, index)}
          ></Person>
        })
      )
    } else {
      btnClass.push(classes.Red);
    }

    
    if (this.state.persons.length <= 2) {
      btnClass.push(classes.Red)
    }

    if (this.state.persons.length <= 1) {
      btnClass.push(classes.lighter)
    }

    return (
      <div className={classes.App}>
        <h1 onCopy={this.copyHandler}>
          Hi, I'm a React App
        </h1>

        <button className={btnClass.join('  ')} alt={this.state.showNames} onClick={() => this.toggleNameHandler("David")}>
          Toggle Names
        </button>

        <div>{persons}</div>
      </div>
    );
  }

}

export default App;




