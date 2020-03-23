import React from 'react';
import './Person.css';

const person = (props) => {
  
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
      <input id={props.id} type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;
