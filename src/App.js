//styled-components.com/
// formidable.com/open-source/radium/

import React, { Component } from "react";
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  color: ${props => props.alt ? "green" : "red"};
  font: inherit;
  border: 1px solid
    ${props => { props.alt ? "green" : "red" }};
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;


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
    }

    const titleClass = []
    if (this.state.persons.length <= 2) {
      titleClass.push("red")
    }

    if (this.state.persons.length <= 1) {
      titleClass.push("lighter")
    }

    return (
      <div className="App">
        <h1 className={titleClass.join(" ")} onCopy={this.copyHandler}>
          Hi, I'm a React App
        </h1>

        <StyledButton alt={this.state.showNames} onClick={() => this.toggleNameHandler("David")}>
          Toggle Names
        </StyledButton>

        <div>{persons}</div>
      </div>
    );
  }

}

export default App;




