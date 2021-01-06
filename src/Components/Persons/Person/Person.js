import React from 'react';
import classes from './Person.module.css'

const person = (props) => {
    console.log('[person.js] rendering...');
    return (
        <div className = {classes.Person}>
            <p onClick={props.click}>This is {props.name}. And age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.clickChange} value={props.name}></input>
        </div>
    );
}

export default person;