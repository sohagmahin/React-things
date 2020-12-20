import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className = "Person">
            <p onClick={props.click}>This is {props.name}. And age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.clickChange} value={props.name}></input>
        </div>
    );
}

export default person;