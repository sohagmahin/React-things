import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    // if we pass [](empty array) then it call only once/initially
    // if we pass [arg], then it will call when arg passes. useEffect call depent on args
    // if we not pass any array then it will call every time when rerendering the whole app.
    useEffect(() => {
        const timer = setTimeout(() => alert('useEffect alert'), 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect ')
        }

    }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect2');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect2');
        }
    });

    const assigned = [];
    let btnClass = '';

    if (props.isShowPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assigned.push(classes.Red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);

