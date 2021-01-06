import React,{useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    // if we pass [](empty array) then it call only once/initially
    // if we pass [arg], then it will call when arg passes. useEffect call depent on args
    // if we not pass any array then it will call every time when rerendering the whole app.
    useEffect(()=>{
        setTimeout(()=>alert('useEffect alert'),1000);
    },[props.persons]);

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

export default Cockpit;

