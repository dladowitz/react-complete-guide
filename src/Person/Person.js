import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 1px solid #eee;
  width: 60%;
  margin: 16px auto;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background: salmon;

  @media (min-width: 700px) {
    width: 450px;
    background: lightgray;
  }
`

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <input
        onChange={props.changed}
        id={props.id}
        type="text"
        value={props.name}
      />
    </StyledDiv>
  );
}

export default person;
