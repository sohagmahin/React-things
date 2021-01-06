import React, { Component } from 'react';
import classes from './Person.module.css'

class Person extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponent');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBefore update');
        return { message: 'snapshots' };
    }
    componentDidUpdate(prevUpdate, preState, snapshot) {
        console.log('[Person.js] componentDidUpdate...', snapshot);
    }
    render() {
        console.log('[person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>This is {this.props.name}. And age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.clickChange} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person;