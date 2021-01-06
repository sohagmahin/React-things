import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
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