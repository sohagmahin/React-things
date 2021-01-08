import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        console.log('[person.js] rendering...');
        return (
            // <div className={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>This is {this.props.name}. And age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.clickChange} value={this.props.name}></input>
            </Aux>
        );
    }
}

export default Person;