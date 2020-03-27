import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <input
        onChange={props.changed}
        id={props.id}
        type="text"
        value={props.name}
      />
    </div>
  );
}

export default person;
