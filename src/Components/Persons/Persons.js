import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponent');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBefore update');
        return { message: 'snapshots' };
    }
    componentDidUpdate(prevUpdate, preState, snapshot) {
        console.log('[Persons.js] componentDidUpdate...', snapshot);
    }

    render() {
        return this.props.persons.map((person, index) => {
            console.log('[Persons.js] rendering...');
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                clickChange={(event) => this.props.clickedChanges(event, person.id)}
            />
            )
        });
    }
}

export default Persons;