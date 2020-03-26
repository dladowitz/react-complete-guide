import React from 'react';
import './Person.css';

const person = (props) => {
  // const style = {
  //   '@media (min-width: 700px)' : {
  //     width: '450px',
  //     background: 'lightgray'
  //   }
  // }
  
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
      <input onChange={props.changed} id={props.id} type="text" value={props.name}/>
    </div>
  )
}

export default person;
