import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assigned = [];
    let btnClass = '';

    if(props.isShowPerson){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assigned.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assigned.push(classes.Bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button className={btnClass}
                onClick={props.togglePerson}>Toogle Person</button>
            <p className={assigned.join(' ')}>This is persons</p>
        </div>
    );
}

export default cockpit;

